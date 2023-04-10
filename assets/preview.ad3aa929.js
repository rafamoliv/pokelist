var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsx, r as react, a as jsxs } from "./jsx-runtime.1846cd15.js";
import { G as Global, S as Spinner, s as setDefaults, a as setI18n, I as I18nContext, B as BrowserRouter } from "./index.8b3f396e.js";
import { M as MyThemeProvider } from "./Home.styles.c9eb19ab.js";
import { T as ThemeProvider, G as GlobalStyle, g as getBatch, R as ReactReduxContext, c as configureStore, a as api } from "./List.styles.dc61429f.js";
import { t as themes } from "./index.31bee4a5.js";
import { P as PortalManager, u as useIsPresent, m as motion, C as CloseButton, A as AnimatePresence, a as Portal } from "./Footer.3aa5ff16.js";
import { u as useSafeLayoutEffect, C as ColorModeContext, i as isObject, c as createMultiStyleConfigHelpers, d as defineStyle, a as cssVar$1, b as defineCssVars, e as defineStyleConfig, f as chakra, r as runIfFn$1, g as createContext, h as forwardRef, j as cx, o as omitThemingProps, k as useMultiStyleConfig } from "./defineProperty.317be907.js";
import { I as Icon } from "./index.46dda1c5.js";
import { i as instance } from "./i18next.3736d4ed.js";
import { _ as _createClass, a as _classCallCheck } from "./Section.7d097e59.js";
import "./Loading.895aa625.js";
import "./index.733ac91e.js";
import "./iframe.16f10e94.js";
import "./emotion-styled.browser.esm.cceb3f76.js";
import "./index.b3810c98.js";
import "./es.map.constructor.edb80200.js";
import "./es.number.to-fixed.45361398.js";
import "./setPrototypeOf.08579ea5.js";
import "./index.0458719a.js";
var css = String.raw;
var vhPolyfill = css`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx(Global, { styles: vhPolyfill }), "CSSPolyfill");
var CSSReset = /* @__PURE__ */ __name(({ scope = "" }) => /* @__PURE__ */ jsx(
  Global,
  {
    styles: css`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
  }
), "CSSReset");
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
  const { preventTransition = true } = options;
  const utils = {
    setDataset: (value) => {
      const cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup == null ? void 0 : cleanup();
    },
    setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(fallback) {
      var _a4;
      const dark = (_a4 = utils.query().matches) != null ? _a4 : fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener(fn) {
      const mql = utils.query();
      const listener = /* @__PURE__ */ __name((e) => {
        fn(e.matches ? "dark" : "light");
      }, "listener");
      if (typeof mql.addListener === "function")
        mql.addListener(listener);
      else
        mql.addEventListener("change", listener);
      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener);
        else
          mql.removeEventListener("change", listener);
      };
    },
    preventTransition() {
      const css2 = document.createElement("style");
      css2.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css2);
      return () => {
        (() => window.getComputedStyle(document.body))();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(css2);
          });
        });
      };
    }
  };
  return utils;
}
__name(getColorModeUtils, "getColorModeUtils");
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get(init2) {
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init2;
      let value;
      try {
        value = localStorage.getItem(key) || init2;
      } catch (e) {
      }
      return value || init2;
    },
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
__name(createLocalStorageManager, "createLocalStorageManager");
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
var noop = /* @__PURE__ */ __name(() => {
}, "noop");
function getTheme(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
__name(getTheme, "getTheme");
function ColorModeProvider(props) {
  const {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode,
      disableTransitionOnChange
    } = {},
    colorModeManager = localStorageManager
  } = props;
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = react.exports.useState(
    () => getTheme(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = react.exports.useState(
    () => getTheme(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = react.exports.useMemo(
    () => getColorModeUtils({ preventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = react.exports.useCallback(
    (value2) => {
      const resolved = value2 === "system" ? getSystemTheme() : value2;
      rawSetColorMode(resolved);
      setClassName(resolved === "dark");
      setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, getSystemTheme, setClassName, setDataset]
  );
  useSafeLayoutEffect(() => {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  react.exports.useEffect(() => {
    const managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, setColorMode]);
  const toggleColorMode = react.exports.useCallback(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  react.exports.useEffect(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = react.exports.useMemo(
    () => ({
      colorMode: value != null ? value : resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return /* @__PURE__ */ jsx(ColorModeContext.Provider, { value: context, children });
}
__name(ColorModeProvider, "ColorModeProvider");
ColorModeProvider.displayName = "ColorModeProvider";
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;
var breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints;
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition;
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;
var typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography;
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes$m = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes$m;
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  __name(assert, "assert");
  function parts(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  __name(parts, "parts");
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  __name(extend, "extend");
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  __name(selectors, "selectors");
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  __name(classnames, "classnames");
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  __name(toPart, "toPart");
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}
__name(anatomy, "anatomy");
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
var formAnatomy = anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
var radioAnatomy = anatomy("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
var statAnatomy = anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb"
);
var tableAnatomy = anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
var tagAnatomy = anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
var cardAnatomy = anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
__name(guard, "guard");
class ColorError extends Error {
  constructor(color) {
    super(`Failed to parse color: "${color}"`);
  }
}
__name(ColorError, "ColorError");
var ColorError$1 = ColorError;
function parseToRgba(color) {
  if (typeof color !== "string")
    throw new ColorError$1(color);
  if (color.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let normalizedColor = color.trim();
  normalizedColor = namedColorRegex.test(color) ? nameToHex(color) : color;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr2 = Array.from(reducedHexMatch).slice(1);
    return [...arr2.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr2[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr2 = Array.from(hexMatch).slice(1);
    return [...arr2.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr2[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr2 = Array.from(rgbaMatch).slice(1);
    return [...arr2.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr2[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s)
      throw new ColorError$1(color);
    if (guard(0, 100, l) !== l)
      throw new ColorError$1(color);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color);
}
__name(parseToRgba, "parseToRgba");
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i) {
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  }
  return (hash2 >>> 0) % 2341;
}
__name(hash, "hash");
const colorToInt = /* @__PURE__ */ __name((x) => parseInt(x.replace(/_/g, ""), 36), "colorToInt");
const compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
  const key = colorToInt(next.substring(0, 3));
  const hex = colorToInt(next.substring(3)).toString(16);
  let prefix = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix += "0";
  }
  acc[key] = `${prefix}${hex}`;
  return acc;
}, {});
function nameToHex(color) {
  const normalizedColorName = color.toLowerCase().trim();
  const result = compressedColorMap[hash(normalizedColorName)];
  if (!result)
    throw new ColorError$1(color);
  return `#${result}`;
}
__name(nameToHex, "nameToHex");
const r = /* @__PURE__ */ __name((str, amount) => Array.from(Array(amount)).map(() => str).join(""), "r");
const reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
const hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
const rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
const hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
const namedColorRegex = /^[a-z]+$/i;
const roundColor = /* @__PURE__ */ __name((color) => {
  return Math.round(color * 255);
}, "roundColor");
const hslToRgb = /* @__PURE__ */ __name((hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
}, "hslToRgb");
function rgba(red, green, blue, alpha) {
  return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
__name(rgba, "rgba");
function transparentize$1(color, amount) {
  const [r2, g, b, a] = parseToRgba(color);
  return rgba(r2, g, b, a - amount);
}
__name(transparentize$1, "transparentize$1");
function toHex(color) {
  const [r2, g, b, a] = parseToRgba(color);
  let hex = /* @__PURE__ */ __name((x) => {
    const h = guard(0, 255, x).toString(16);
    return h.length === 1 ? `0${h}` : h;
  }, "hex");
  return `#${hex(r2)}${hex(g)}${hex(b)}${a < 1 ? hex(Math.round(a * 255)) : ""}`;
}
__name(toHex, "toHex");
function dlv_es_default(t, e, l, n, r2) {
  for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
    t = t ? t[e[n]] : r2;
  return t === r2 ? l : t;
}
__name(dlv_es_default, "dlv_es_default");
var isEmptyObject = /* @__PURE__ */ __name((obj) => Object.keys(obj).length === 0, "isEmptyObject");
var getColor = /* @__PURE__ */ __name((theme2, color, fallback) => {
  const hex = dlv_es_default(theme2, `colors.${color}`, color);
  try {
    toHex(hex);
    return hex;
  } catch {
    return fallback != null ? fallback : "#000000";
  }
}, "getColor");
var getBrightness = /* @__PURE__ */ __name((color) => {
  const [r2, g, b] = parseToRgba(color);
  return (r2 * 299 + g * 587 + b * 114) / 1e3;
}, "getBrightness");
var tone = /* @__PURE__ */ __name((color) => (theme2) => {
  const hex = getColor(theme2, color);
  const brightness = getBrightness(hex);
  const isDark2 = brightness < 128;
  return isDark2 ? "dark" : "light";
}, "tone");
var isDark = /* @__PURE__ */ __name((color) => (theme2) => tone(color)(theme2) === "dark", "isDark");
var transparentize = /* @__PURE__ */ __name((color, opacity) => (theme2) => {
  const raw = getColor(theme2, color);
  return transparentize$1(raw, 1 - opacity);
}, "transparentize");
function generateStripe(size2 = "1rem", color = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color} 25%,
    transparent 25%,
    transparent 50%,
    ${color} 50%,
    ${color} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size2} ${size2}`
  };
}
__name(generateStripe, "generateStripe");
var randomHex = /* @__PURE__ */ __name(() => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`, "randomHex");
function randomColor(opts) {
  const fallback = randomHex();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
__name(randomColor, "randomColor");
function randomColorFromString(str) {
  let hash2 = 0;
  if (str.length === 0)
    return hash2.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash2 = str.charCodeAt(i) + ((hash2 << 5) - hash2);
    hash2 = hash2 & hash2;
  }
  let color = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash2 >> j * 8 & 255;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}
__name(randomColorFromString, "randomColorFromString");
function randomColorFromList(str, list) {
  let index = 0;
  if (str.length === 0)
    return list[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list.length + list.length) % list.length;
  return list[index];
}
__name(randomColorFromList, "randomColorFromList");
function randomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
__name(randomFromList, "randomFromList");
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
__name(mode, "mode");
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
__name(orient, "orient");
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
__name(toRef, "toRef");
var toExpr = /* @__PURE__ */ __name((operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, ""), "toExpr");
var add = /* @__PURE__ */ __name((...operands) => `calc(${toExpr("+", ...operands)})`, "add");
var subtract = /* @__PURE__ */ __name((...operands) => `calc(${toExpr("-", ...operands)})`, "subtract");
var multiply = /* @__PURE__ */ __name((...operands) => `calc(${toExpr("*", ...operands)})`, "multiply");
var divide = /* @__PURE__ */ __name((...operands) => `calc(${toExpr("/", ...operands)})`, "divide");
var negate = /* @__PURE__ */ __name((x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
}, "negate");
var calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString()
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate
  }
);
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
__name(isDecimal, "isDecimal");
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
__name(replaceWhiteSpace, "replaceWhiteSpace");
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
__name(escape, "escape");
function addPrefix(value, prefix = "") {
  return [prefix, escape(value)].filter(Boolean).join("-");
}
__name(addPrefix, "addPrefix");
function toVarRef(name, fallback) {
  return `var(${escape(name)}${fallback ? `, ${fallback}` : ""})`;
}
__name(toVarRef, "toVarRef");
function toVar(value, prefix = "") {
  return `--${addPrefix(value, prefix)}`;
}
__name(toVar, "toVar");
function cssVar(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
__name(cssVar, "cssVar");
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}
__name(getFallback, "getFallback");
var { defineMultiStyleConfig: defineMultiStyleConfig$o, definePartsStyle: definePartsStyle$o } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar("switch-track-width");
var $height = cssVar("switch-track-height");
var $diff = cssVar("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar("switch-thumb-x");
var $bg$e = cssVar("switch-bg");
var baseStyleTrack$2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg$e.variable]: "colors.gray.300",
    _dark: {
      [$bg$e.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg$e.variable]: `colors.${c}.500`,
      _dark: {
        [$bg$e.variable]: `colors.${c}.200`
      }
    },
    bg: $bg$e.reference
  };
});
var baseStyleThumb$1 = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle$E = definePartsStyle$o((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString()
    }
  },
  track: baseStyleTrack$2(props),
  thumb: baseStyleThumb$1
}));
var sizes$l = {
  sm: definePartsStyle$o({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle$o({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle$o({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig$o({
  baseStyle: baseStyle$E,
  sizes: sizes$l,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$n, definePartsStyle: definePartsStyle$n } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle$D = definePartsStyle$n({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle$n((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle$n((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants$b = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes$k = {
  sm: definePartsStyle$n({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle$n({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle$n({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig$n({
  baseStyle: baseStyle$D,
  variants: variants$b,
  sizes: sizes$k,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});
var $fg$5 = cssVar$1("tabs-color");
var $bg$d = cssVar$1("tabs-bg");
var $border$3 = cssVar$1("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig$m, definePartsStyle: definePartsStyle$m } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot$1 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle$C = definePartsStyle$m((props) => ({
  root: baseStyleRoot$1(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes$j = {
  sm: definePartsStyle$m({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle$m({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle$m({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle$m((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg$5.variable]: `colors.${c}.600`,
        _dark: {
          [$fg$5.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg$d.variable]: "colors.gray.200",
        _dark: {
          [$bg$d.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg$5.reference,
      bg: $bg$d.reference
    }
  };
});
var variantEnclosed = definePartsStyle$m((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border$3.variable]: "transparent",
      _selected: {
        [$fg$5.variable]: `colors.${c}.600`,
        [$border$3.variable]: `colors.white`,
        _dark: {
          [$fg$5.variable]: `colors.${c}.300`,
          [$border$3.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border$3.reference
      },
      color: $fg$5.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle$m((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg$d.variable]: "colors.gray.50",
      _dark: {
        [$bg$d.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg$d.variable]: "colors.white",
        [$fg$5.variable]: `colors.${c}.600`,
        _dark: {
          [$bg$d.variable]: "colors.gray.800",
          [$fg$5.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg$5.reference,
      bg: $bg$d.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle$m((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle$m((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg$5.variable]: "colors.gray.600",
      _dark: {
        [$fg$5.variable]: "inherit"
      },
      _selected: {
        [$fg$5.variable]: "colors.white",
        [$bg$d.variable]: `colors.${c}.600`,
        _dark: {
          [$fg$5.variable]: "colors.gray.800",
          [$bg$d.variable]: `colors.${c}.300`
        }
      },
      color: $fg$5.reference,
      bg: $bg$d.reference
    }
  };
});
var variantUnstyled$2 = definePartsStyle$m({});
var variants$a = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled$2
};
var tabsTheme = defineMultiStyleConfig$m({
  baseStyle: baseStyle$C,
  sizes: sizes$j,
  variants: variants$a,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});
var vars = defineCssVars("badge", ["bg", "color", "shadow"]);
var baseStyle$B = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var variantSolid$3 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize(`${c}.500`, 0.6)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    _dark: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`
    }
  };
});
var variantSubtle$1 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    _dark: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`
    }
  };
});
var variantOutline$2 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize(`${c}.200`, 0.8)(theme2);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var variants$9 = {
  solid: variantSolid$3,
  subtle: variantSubtle$1,
  outline: variantOutline$2
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle$B,
  variants: variants$9,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$l, definePartsStyle: definePartsStyle$l } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var baseStyleContainer$4 = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  color: vars.color.reference,
  bg: vars.bg.reference,
  boxShadow: vars.shadow.reference,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyleLabel$3 = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton$3 = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle$A = definePartsStyle$l({
  container: baseStyleContainer$4,
  label: baseStyleLabel$3,
  closeButton: baseStyleCloseButton$3
});
var sizes$i = {
  sm: definePartsStyle$l({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle$l({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: definePartsStyle$l({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
};
var variants$8 = {
  subtle: definePartsStyle$l((props) => {
    var _a4;
    return {
      container: (_a4 = badgeTheme.variants) == null ? void 0 : _a4.subtle(props)
    };
  }),
  solid: definePartsStyle$l((props) => {
    var _a4;
    return {
      container: (_a4 = badgeTheme.variants) == null ? void 0 : _a4.solid(props)
    };
  }),
  outline: definePartsStyle$l((props) => {
    var _a4;
    return {
      container: (_a4 = badgeTheme.variants) == null ? void 0 : _a4.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig$l({
  variants: variants$8,
  baseStyle: baseStyle$A,
  sizes: sizes$i,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
var { definePartsStyle: definePartsStyle$k, defineMultiStyleConfig: defineMultiStyleConfig$k } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var baseStyle$z = definePartsStyle$k({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  })
};
var sizes$h = {
  lg: definePartsStyle$k({
    field: size.lg,
    addon: size.lg
  }),
  md: definePartsStyle$k({
    field: size.md,
    addon: size.md
  }),
  sm: definePartsStyle$k({
    field: size.sm,
    addon: size.sm
  }),
  xs: definePartsStyle$k({
    field: size.xs,
    addon: size.xs
  })
};
function getDefaults$1(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
__name(getDefaults$1, "getDefaults$1");
var variantOutline$1 = definePartsStyle$k((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults$1(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle$k((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults$1(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle$k((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults$1(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled$1 = definePartsStyle$k({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants$7 = {
  outline: variantOutline$1,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var inputTheme = defineMultiStyleConfig$k({
  baseStyle: baseStyle$z,
  sizes: sizes$h,
  variants: variants$7,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
var _a$2;
var baseStyle$y = defineStyle({
  ...(_a$2 = inputTheme.baseStyle) == null ? void 0 : _a$2.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a2$2, _b$2;
var variants$6 = {
  outline: defineStyle(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.outline(props).field) != null ? _b3 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.flushed(props).field) != null ? _b3 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.filled(props).field) != null ? _b3 : {};
    }
  ),
  unstyled: (_b$2 = (_a2$2 = inputTheme.variants) == null ? void 0 : _a2$2.unstyled.field) != null ? _b$2 : {}
};
var _a3, _b2, _c$1, _d$1, _e$1, _f$1, _g$1, _h$1;
var sizes$g = {
  xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
  sm: (_d$1 = (_c$1 = inputTheme.sizes) == null ? void 0 : _c$1.sm.field) != null ? _d$1 : {},
  md: (_f$1 = (_e$1 = inputTheme.sizes) == null ? void 0 : _e$1.md.field) != null ? _f$1 : {},
  lg: (_h$1 = (_g$1 = inputTheme.sizes) == null ? void 0 : _g$1.lg.field) != null ? _h$1 : {}
};
var textareaTheme = defineStyleConfig({
  baseStyle: baseStyle$y,
  sizes: sizes$g,
  variants: variants$6,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
var $bg$c = cssVar("tooltip-bg");
var $fg$4 = cssVar("tooltip-fg");
var $arrowBg$1 = cssVar("popper-arrow-bg");
var baseStyle$x = defineStyle({
  bg: $bg$c.reference,
  color: $fg$4.reference,
  [$bg$c.variable]: "colors.gray.700",
  [$fg$4.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg$c.variable]: "colors.gray.300",
    [$fg$4.variable]: "colors.gray.900"
  },
  [$arrowBg$1.variable]: $bg$c.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle$x
});
var { defineMultiStyleConfig: defineMultiStyleConfig$j, definePartsStyle: definePartsStyle$j } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel$2 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack$1 = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack$1 = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle$w = definePartsStyle$j((props) => ({
  label: baseStyleLabel$2,
  filledTrack: baseStyleFilledTrack$1(props),
  track: baseStyleTrack$1(props)
}));
var sizes$f = {
  xs: definePartsStyle$j({
    track: { h: "1" }
  }),
  sm: definePartsStyle$j({
    track: { h: "2" }
  }),
  md: definePartsStyle$j({
    track: { h: "3" }
  }),
  lg: definePartsStyle$j({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig$j({
  sizes: sizes$f,
  baseStyle: baseStyle$w,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var isFunction = /* @__PURE__ */ __name((value) => typeof value === "function", "isFunction");
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
__name(runIfFn, "runIfFn");
var { definePartsStyle: definePartsStyle$i, defineMultiStyleConfig: defineMultiStyleConfig$i } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size$2 = cssVar$1("checkbox-size");
var baseStyleControl$1 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size$2.reference,
    h: $size$2.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer$3 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel$1 = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon$5 = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle$v = definePartsStyle$i((props) => ({
  icon: baseStyleIcon$5,
  container: baseStyleContainer$3,
  control: runIfFn(baseStyleControl$1, props),
  label: baseStyleLabel$1
}));
var sizes$e = {
  sm: definePartsStyle$i({
    control: { [$size$2.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle$i({
    control: { [$size$2.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle$i({
    control: { [$size$2.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig$i({
  baseStyle: baseStyle$v,
  sizes: sizes$e,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$h, definePartsStyle: definePartsStyle$h } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl = defineStyle((props) => {
  var _a4;
  const controlStyle = (_a4 = runIfFn(checkboxTheme.baseStyle, props)) == null ? void 0 : _a4.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle$u = definePartsStyle$h((props) => {
  var _a4, _b3, _c2, _d2;
  return {
    label: (_b3 = (_a4 = checkboxTheme).baseStyle) == null ? void 0 : _b3.call(_a4, props).label,
    container: (_d2 = (_c2 = checkboxTheme).baseStyle) == null ? void 0 : _d2.call(_c2, props).container,
    control: baseStyleControl(props)
  };
});
var sizes$d = {
  md: definePartsStyle$h({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle$h({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle$h({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig$h({
  baseStyle: baseStyle$u,
  sizes: sizes$d,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$g, definePartsStyle: definePartsStyle$g } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var $bg$b = cssVar$1("select-bg");
var _a$1;
var baseStyleField$1 = defineStyle({
  ...(_a$1 = inputTheme.baseStyle) == null ? void 0 : _a$1.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg$b.reference,
  [$bg$b.variable]: "colors.white",
  _dark: {
    [$bg$b.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg$b.reference
  }
});
var baseStyleIcon$4 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle$t = definePartsStyle$g({
  field: baseStyleField$1,
  icon: baseStyleIcon$4
});
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a2$1, _b$1, _c, _d, _e, _f, _g, _h;
var sizes$c = {
  lg: {
    ...(_a2$1 = inputTheme.sizes) == null ? void 0 : _a2$1.lg,
    field: {
      ...(_b$1 = inputTheme.sizes) == null ? void 0 : _b$1.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c = inputTheme.sizes) == null ? void 0 : _c.md,
    field: {
      ...(_d = inputTheme.sizes) == null ? void 0 : _d.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e = inputTheme.sizes) == null ? void 0 : _e.sm,
    field: {
      ...(_f = inputTheme.sizes) == null ? void 0 : _f.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g = inputTheme.sizes) == null ? void 0 : _g.xs,
    field: {
      ...(_h = inputTheme.sizes) == null ? void 0 : _h.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig$g({
  baseStyle: baseStyle$t,
  sizes: sizes$c,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});
var $startColor = cssVar$1("skeleton-start-color");
var $endColor = cssVar$1("skeleton-end-color");
var baseStyle$s = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle$s
});
var $bg$a = cssVar$1("skip-link-bg");
var baseStyle$r = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg$a.variable]: "colors.white",
    _dark: {
      [$bg$a.variable]: "colors.gray.700"
    },
    bg: $bg$a.reference
  }
});
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle$r
});
var { defineMultiStyleConfig: defineMultiStyleConfig$f, definePartsStyle: definePartsStyle$f } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar$1("slider-thumb-size");
var $trackSize = cssVar$1("slider-track-size");
var $bg$9 = cssVar$1("slider-bg");
var baseStyleContainer$2 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg$9.variable]: "colors.gray.200",
    _dark: {
      [$bg$9.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg$9.variable]: "colors.gray.300",
      _dark: {
        [$bg$9.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg$9.reference
  };
});
var baseStyleThumb = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg$9.variable]: `colors.${c}.500`,
    _dark: {
      [$bg$9.variable]: `colors.${c}.200`
    },
    bg: $bg$9.reference
  };
});
var baseStyle$q = definePartsStyle$f((props) => ({
  container: baseStyleContainer$2(props),
  track: baseStyleTrack(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack(props)
}));
var sizeLg = definePartsStyle$f({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle$f({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle$f({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes$b = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig$f({
  baseStyle: baseStyle$q,
  sizes: sizes$b,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var $size$1 = cssVar("spinner-size");
var baseStyle$p = defineStyle({
  width: [$size$1.reference],
  height: [$size$1.reference]
});
var sizes$a = {
  xs: defineStyle({
    [$size$1.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size$1.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size$1.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size$1.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size$1.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle$p,
  sizes: sizes$a,
  defaultProps: {
    size: "md"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$e, definePartsStyle: definePartsStyle$e } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon$3 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle$o = definePartsStyle$e({
  container: {},
  label: baseStyleLabel,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon$3
});
var sizes$9 = {
  md: definePartsStyle$e({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig$e({
  baseStyle: baseStyle$o,
  sizes: sizes$9,
  defaultProps: {
    size: "md"
  }
});
var $bg$8 = cssVar$1("kbd-bg");
var baseStyle$n = defineStyle({
  [$bg$8.variable]: "colors.gray.100",
  _dark: {
    [$bg$8.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg$8.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle$n
});
var baseStyle$m = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle$m
});
var { defineMultiStyleConfig: defineMultiStyleConfig$d, definePartsStyle: definePartsStyle$d } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon$2 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle$l = definePartsStyle$d({
  icon: baseStyleIcon$2
});
var listTheme = defineMultiStyleConfig$d({
  baseStyle: baseStyle$l
});
var { defineMultiStyleConfig: defineMultiStyleConfig$c, definePartsStyle: definePartsStyle$c } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var $bg$7 = cssVar$1("menu-bg");
var $shadow$2 = cssVar$1("menu-shadow");
var baseStyleList = defineStyle({
  [$bg$7.variable]: "#fff",
  [$shadow$2.variable]: "shadows.sm",
  _dark: {
    [$bg$7.variable]: "colors.gray.700",
    [$shadow$2.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg$7.reference,
  boxShadow: $shadow$2.reference
});
var baseStyleItem = defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg$7.variable]: "colors.gray.100",
    _dark: {
      [$bg$7.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg$7.variable]: "colors.gray.200",
    _dark: {
      [$bg$7.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg$7.variable]: "colors.gray.100",
    _dark: {
      [$bg$7.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg$7.reference
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton$1 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle$k = definePartsStyle$c({
  button: baseStyleButton$1,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme = defineMultiStyleConfig$c({
  baseStyle: baseStyle$k
});
var { defineMultiStyleConfig: defineMultiStyleConfig$b, definePartsStyle: definePartsStyle$b } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var $bg$6 = cssVar$1("modal-bg");
var $shadow$1 = cssVar$1("modal-shadow");
var baseStyleOverlay$1 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer$1 = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog$1 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    borderRadius: "md",
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [$bg$6.variable]: "colors.white",
    [$shadow$1.variable]: "shadows.lg",
    _dark: {
      [$bg$6.variable]: "colors.gray.700",
      [$shadow$1.variable]: "shadows.dark-lg"
    },
    bg: $bg$6.reference,
    boxShadow: $shadow$1.reference
  };
});
var baseStyleHeader$2 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton$2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody$2 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter$2 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle$j = definePartsStyle$b((props) => ({
  overlay: baseStyleOverlay$1,
  dialogContainer: runIfFn(baseStyleDialogContainer$1, props),
  dialog: runIfFn(baseStyleDialog$1, props),
  header: baseStyleHeader$2,
  closeButton: baseStyleCloseButton$2,
  body: runIfFn(baseStyleBody$2, props),
  footer: baseStyleFooter$2
}));
function getSize$3(value) {
  if (value === "full") {
    return definePartsStyle$b({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle$b({
    dialog: { maxW: value }
  });
}
__name(getSize$3, "getSize$3");
var sizes$8 = {
  xs: getSize$3("xs"),
  sm: getSize$3("sm"),
  md: getSize$3("md"),
  lg: getSize$3("lg"),
  xl: getSize$3("xl"),
  "2xl": getSize$3("2xl"),
  "3xl": getSize$3("3xl"),
  "4xl": getSize$3("4xl"),
  "5xl": getSize$3("5xl"),
  "6xl": getSize$3("6xl"),
  full: getSize$3("full")
};
var modalTheme = defineMultiStyleConfig$b({
  baseStyle: baseStyle$j,
  sizes: sizes$8,
  defaultProps: { size: "md" }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$a, definePartsStyle: definePartsStyle$a } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar("number-input-stepper-width");
var $inputPadding = cssVar("number-input-input-padding");
var inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
var $bg$5 = cssVar("number-input-bg");
var $fg$3 = cssVar("number-input-color");
var $border$2 = cssVar("number-input-border-color");
var baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField = defineStyle(
  (props) => {
    var _a4, _b3;
    return (_b3 = (_a4 = runIfFn(inputTheme.baseStyle, props)) == null ? void 0 : _a4.field) != null ? _b3 : {};
  }
);
var baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
var baseStyleStepper = defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border$2.reference,
  color: $fg$3.reference,
  bg: $bg$5.reference,
  [$fg$3.variable]: "colors.chakra-body-text",
  [$border$2.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg$3.variable]: "colors.whiteAlpha.800",
    [$border$2.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg$5.variable]: "colors.gray.200",
    _dark: {
      [$bg$5.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle$i = definePartsStyle$a((props) => {
  var _a4;
  return {
    root: baseStyleRoot,
    field: (_a4 = runIfFn(baseStyleField, props)) != null ? _a4 : {},
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper
  };
});
function getSize$2(size2) {
  var _a4, _b3, _c2;
  const sizeStyle = (_a4 = inputTheme.sizes) == null ? void 0 : _a4[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = (_c2 = (_b3 = sizeStyle.field) == null ? void 0 : _b3.fontSize) != null ? _c2 : "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle$a({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
__name(getSize$2, "getSize$2");
var sizes$7 = {
  xs: getSize$2("xs"),
  sm: getSize$2("sm"),
  md: getSize$2("md"),
  lg: getSize$2("lg")
};
var numberInputTheme = defineMultiStyleConfig$a({
  baseStyle: baseStyle$i,
  sizes: sizes$7,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});
var _a;
var baseStyle$h = defineStyle({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  textAlign: "center"
});
var sizes$6 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a2, _b;
var variants$5 = {
  outline: defineStyle(
    (props) => {
      var _a32, _b22, _c2;
      return (_c2 = (_b22 = runIfFn((_a32 = inputTheme.variants) == null ? void 0 : _a32.outline, props)) == null ? void 0 : _b22.field) != null ? _c2 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a32, _b22, _c2;
      return (_c2 = (_b22 = runIfFn((_a32 = inputTheme.variants) == null ? void 0 : _a32.flushed, props)) == null ? void 0 : _b22.field) != null ? _c2 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a32, _b22, _c2;
      return (_c2 = (_b22 = runIfFn((_a32 = inputTheme.variants) == null ? void 0 : _a32.filled, props)) == null ? void 0 : _b22.field) != null ? _c2 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle$h,
  sizes: sizes$6,
  variants: variants$5,
  defaultProps: inputTheme.defaultProps
});
var { defineMultiStyleConfig: defineMultiStyleConfig$9, definePartsStyle: definePartsStyle$9 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar("popper-bg");
var $arrowBg = cssVar("popper-arrow-bg");
var $arrowShadowColor = cssVar("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({ zIndex: 10 });
var baseStyleContent = defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader$1 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody$1 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter$1 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton$1 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle$g = definePartsStyle$9({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader$1,
  body: baseStyleBody$1,
  footer: baseStyleFooter$1,
  closeButton: baseStyleCloseButton$1
});
var popoverTheme = defineMultiStyleConfig$9({
  baseStyle: baseStyle$g
});
var { definePartsStyle: definePartsStyle$8, defineMultiStyleConfig: defineMultiStyleConfig$8 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg$4 = cssVar$1("drawer-bg");
var $bs = cssVar$1("drawer-box-shadow");
function getSize$1(value) {
  if (value === "full") {
    return definePartsStyle$8({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle$8({
    dialog: { maxW: value }
  });
}
__name(getSize$1, "getSize$1");
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "overlay"
});
var baseStyleDialogContainer = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg$4.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg$4.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg$4.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle$f = definePartsStyle$8((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
}));
var sizes$5 = {
  xs: getSize$1("xs"),
  sm: getSize$1("md"),
  md: getSize$1("lg"),
  lg: getSize$1("2xl"),
  xl: getSize$1("4xl"),
  full: getSize$1("full")
};
var drawerTheme = defineMultiStyleConfig$8({
  baseStyle: baseStyle$f,
  sizes: sizes$5,
  defaultProps: {
    size: "xs"
  }
});
var { definePartsStyle: definePartsStyle$7, defineMultiStyleConfig: defineMultiStyleConfig$7 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle$e = definePartsStyle$7({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig$7({
  baseStyle: baseStyle$e
});
var { definePartsStyle: definePartsStyle$6, defineMultiStyleConfig: defineMultiStyleConfig$6 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg$2 = cssVar$1("form-control-color");
var baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg$2.variable]: "colors.red.500",
  _dark: {
    [$fg$2.variable]: "colors.red.300"
  },
  color: $fg$2.reference
});
var baseStyleHelperText = defineStyle({
  mt: "2",
  [$fg$2.variable]: "colors.gray.600",
  _dark: {
    [$fg$2.variable]: "colors.whiteAlpha.600"
  },
  color: $fg$2.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle$d = definePartsStyle$6({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig$6({
  baseStyle: baseStyle$d
});
var { definePartsStyle: definePartsStyle$5, defineMultiStyleConfig: defineMultiStyleConfig$5 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg$1 = cssVar$1("form-error-color");
var baseStyleText = defineStyle({
  [$fg$1.variable]: `colors.red.500`,
  _dark: {
    [$fg$1.variable]: `colors.red.300`
  },
  color: $fg$1.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon$1 = defineStyle({
  marginEnd: "0.5em",
  [$fg$1.variable]: `colors.red.500`,
  _dark: {
    [$fg$1.variable]: `colors.red.300`
  },
  color: $fg$1.reference
});
var baseStyle$c = definePartsStyle$5({
  text: baseStyleText,
  icon: baseStyleIcon$1
});
var formErrorTheme = defineMultiStyleConfig$5({
  baseStyle: baseStyle$c
});
var baseStyle$b = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = defineStyleConfig({
  baseStyle: baseStyle$b
});
var baseStyle$a = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes$4 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle$a,
  sizes: sizes$4,
  defaultProps: {
    size: "xl"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$4, definePartsStyle: definePartsStyle$4 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyle$9 = definePartsStyle$4({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig$4({
  baseStyle: baseStyle$9
});
var baseStyle$8 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid$2 = defineStyle((props) => {
  var _a4;
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = (_a4 = accessibleColorMap[c]) != null ? _a4 : {};
  const background = mode(bg, `${c}.200`)(props);
  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants$4 = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid$2,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes$3 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = defineStyleConfig({
  baseStyle: baseStyle$8,
  variants: variants$4,
  sizes: sizes$3,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});
var { definePartsStyle: definePartsStyle$3, defineMultiStyleConfig: defineMultiStyleConfig$3 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg$3 = cssVar$1("card-bg");
var $padding = cssVar$1("card-padding");
var $shadow = cssVar$1("card-shadow");
var $radius = cssVar$1("card-radius");
var $border$1 = cssVar$1("card-border-width", "0");
var $borderColor = cssVar$1("card-border-color");
var baseStyle$7 = definePartsStyle$3({
  container: {
    [$bg$3.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg$3.reference,
    boxShadow: $shadow.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border$1.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding.reference
  },
  footer: {
    padding: $padding.reference
  }
});
var sizes$2 = {
  sm: definePartsStyle$3({
    container: {
      [$radius.variable]: "radii.base",
      [$padding.variable]: "space.3"
    }
  }),
  md: definePartsStyle$3({
    container: {
      [$radius.variable]: "radii.md",
      [$padding.variable]: "space.5"
    }
  }),
  lg: definePartsStyle$3({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding.variable]: "space.7"
    }
  })
};
var variants$3 = {
  elevated: definePartsStyle$3({
    container: {
      [$shadow.variable]: "shadows.base",
      _dark: {
        [$bg$3.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle$3({
    container: {
      [$border$1.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle$3({
    container: {
      [$bg$3.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding.variable]: 0
    },
    header: {
      [$padding.variable]: 0
    },
    footer: {
      [$padding.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig$3({
  baseStyle: baseStyle$7,
  variants: variants$3,
  sizes: sizes$2,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});
var $size = cssVar("close-button-size");
var $bg$2 = cssVar("close-button-bg");
var baseStyle$6 = defineStyle({
  w: [$size.reference],
  h: [$size.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg$2.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg$2.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg$2.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg$2.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg$2.reference
});
var sizes$1 = {
  lg: defineStyle({
    [$size.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle$6,
  sizes: sizes$1,
  defaultProps: {
    size: "md"
  }
});
var { variants: variants$2, defaultProps } = badgeTheme;
var baseStyle$5 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle$5,
  variants: variants$2,
  defaultProps
});
var baseStyle$4 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle$4
});
var baseStyle$3 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid$1 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants$1 = {
  solid: variantSolid$1,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle$3,
  variants: variants$1,
  defaultProps: {
    variant: "solid"
  }
});
var { definePartsStyle: definePartsStyle$2, defineMultiStyleConfig: defineMultiStyleConfig$2 } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var baseStyleContainer$1 = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon = defineStyle({
  fontSize: "1.25em"
});
var baseStyle$2 = definePartsStyle$2({
  container: baseStyleContainer$1,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
});
var accordionTheme = defineMultiStyleConfig$2({ baseStyle: baseStyle$2 });
var { definePartsStyle: definePartsStyle$1, defineMultiStyleConfig: defineMultiStyleConfig$1 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg = cssVar$1("alert-fg");
var $bg$1 = cssVar$1("alert-bg");
var baseStyle$1 = definePartsStyle$1({
  container: {
    bg: $bg$1.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
__name(getBg, "getBg");
var variantSubtle = definePartsStyle$1((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg$1.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg$1.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle$1((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg$1.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg$1.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg.reference
    }
  };
});
var variantTopAccent = definePartsStyle$1((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg$1.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg$1.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg.reference
    }
  };
});
var variantSolid = definePartsStyle$1((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg.variable]: `colors.white`,
      [$bg$1.variable]: `colors.${c}.500`,
      _dark: {
        [$fg.variable]: `colors.gray.900`,
        [$bg$1.variable]: `colors.${c}.200`
      },
      color: $fg.reference
    }
  };
});
var variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid
};
var alertTheme = defineMultiStyleConfig$1({
  baseStyle: baseStyle$1,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border = cssVar$1("avatar-border-color");
var $bg = cssVar$1("avatar-bg");
var baseStyleBadge = defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  [$border.variable]: "white",
  _dark: {
    [$border.variable]: "colors.gray.800"
  },
  borderColor: $border.reference
});
var baseStyleExcessLabel = defineStyle({
  [$bg.variable]: "colors.gray.200",
  _dark: {
    [$bg.variable]: "colors.whiteAlpha.400"
  },
  bgColor: $bg.reference
});
var $avatarBg = cssVar$1("avatar-background");
var baseStyleContainer = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color = "white";
  if (!isBgDark)
    color = "gray.800";
  return {
    bg: $avatarBg.reference,
    "&:not([data-loaded])": {
      [$avatarBg.variable]: bg
    },
    color,
    [$border.variable]: "colors.white",
    _dark: {
      [$border.variable]: "colors.gray.800"
    },
    borderColor: $border.reference,
    verticalAlign: "top"
  };
});
var baseStyle = definePartsStyle((props) => ({
  badge: runIfFn(baseStyleBadge, props),
  excessLabel: runIfFn(baseStyleExcessLabel, props),
  container: runIfFn(baseStyleContainer, props)
}));
function getSize(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle({
    container: {
      width: size2,
      height: size2,
      fontSize: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: `calc(${themeSize != null ? themeSize : size2} / 2.5)`,
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  });
}
__name(getSize, "getSize");
var sizes = {
  "2xs": getSize(4),
  xs: getSize(6),
  sm: getSize(8),
  md: getSize(12),
  lg: getSize(16),
  xl: getSize(24),
  "2xl": getSize(32),
  full: getSize("100%")
};
var avatarTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: "md" }
});
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
  Card: cardTheme
};
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
};
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
({
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
});
var EnvironmentContext = react.exports.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = react.exports.useRef(null);
  const context = react.exports.useMemo(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => {
        var _a4, _b3;
        return (_b3 = (_a4 = ref.current) == null ? void 0 : _a4.ownerDocument) != null ? _b3 : document;
      },
      getWindow: () => {
        var _a4, _b3;
        return (_b3 = (_a4 = ref.current) == null ? void 0 : _a4.ownerDocument.defaultView) != null ? _b3 : window;
      }
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return /* @__PURE__ */ jsxs(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && /* @__PURE__ */ jsx("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
__name(EnvironmentProvider, "EnvironmentProvider");
EnvironmentProvider.displayName = "EnvironmentProvider";
var ChakraProvider$1 = /* @__PURE__ */ __name((props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme: theme2 = {},
    environment,
    cssVarsRoot,
    disableEnvironment
  } = props;
  const _children = /* @__PURE__ */ jsx(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return /* @__PURE__ */ jsx(ThemeProvider, { theme: theme2, cssVarsRoot, children: /* @__PURE__ */ jsxs(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme2.config,
      children: [
        resetCSS ? /* @__PURE__ */ jsx(CSSReset, { scope: resetScope }) : /* @__PURE__ */ jsx(CSSPolyfill, {}),
        /* @__PURE__ */ jsx(GlobalStyle, {}),
        portalZIndex ? /* @__PURE__ */ jsx(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
}, "ChakraProvider$1");
var findById = /* @__PURE__ */ __name((arr2, id) => arr2.find((toast) => toast.id === id), "findById");
function findToast(toasts, id) {
  const position = getToastPosition(toasts, id);
  const index = position ? toasts[position].findIndex((toast) => toast.id === id) : -1;
  return {
    position,
    index
  };
}
__name(findToast, "findToast");
function getToastPosition(toasts, id) {
  for (const [position, values] of Object.entries(toasts)) {
    if (findById(values, id)) {
      return position;
    }
  }
}
__name(getToastPosition, "getToastPosition");
function getToastStyle(position) {
  const isRighty = position.includes("right");
  const isLefty = position.includes("left");
  let alignItems = "center";
  if (isRighty)
    alignItems = "flex-end";
  if (isLefty)
    alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
__name(getToastStyle, "getToastStyle");
function getToastListStyle(position) {
  const isTopOrBottom = position === "top" || position === "bottom";
  const margin = isTopOrBottom ? "0 auto" : void 0;
  const top = position.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
  const bottom = position.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
  const right = !position.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
  const left = !position.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin,
    top,
    bottom,
    right,
    left
  };
}
__name(getToastListStyle, "getToastListStyle");
function useCallbackRef(callback, deps = []) {
  const callbackRef = react.exports.useRef(callback);
  react.exports.useEffect(() => {
    callbackRef.current = callback;
  });
  return react.exports.useCallback((...args) => {
    var _a4;
    return (_a4 = callbackRef.current) == null ? void 0 : _a4.call(callbackRef, ...args);
  }, deps);
}
__name(useCallbackRef, "useCallbackRef");
function useTimeout(callback, delay) {
  const fn = useCallbackRef(callback);
  react.exports.useEffect(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn]);
}
__name(useTimeout, "useTimeout");
function useUpdateEffect(callback, deps) {
  const renderCycleRef = react.exports.useRef(false);
  const effectCycleRef = react.exports.useRef(false);
  react.exports.useEffect(() => {
    const mounted = renderCycleRef.current;
    const run = mounted && effectCycleRef.current;
    if (run) {
      return callback();
    }
    effectCycleRef.current = true;
  }, deps);
  react.exports.useEffect(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
}
__name(useUpdateEffect, "useUpdateEffect");
var toastMotionVariants = {
  initial: (props) => {
    const { position } = props;
    const dir = ["top", "bottom"].includes(position) ? "y" : "x";
    let factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1;
    if (position === "bottom")
      factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
var ToastComponent = react.exports.memo((props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position = "bottom",
    duration = 5e3,
    containerStyle,
    motionVariants = toastMotionVariants,
    toastSpacing = "0.5rem"
  } = props;
  const [delay, setDelay] = react.exports.useState(duration);
  const isPresent = useIsPresent();
  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent]);
  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);
  const onMouseEnter = /* @__PURE__ */ __name(() => setDelay(null), "onMouseEnter");
  const onMouseLeave = /* @__PURE__ */ __name(() => setDelay(duration), "onMouseLeave");
  const close = /* @__PURE__ */ __name(() => {
    if (isPresent)
      onRequestRemove();
  }, "close");
  react.exports.useEffect(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  useTimeout(close, delay);
  const containerStyles = react.exports.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing,
      ...containerStyle
    }),
    [containerStyle, toastSpacing]
  );
  const toastStyle = react.exports.useMemo(() => getToastStyle(position), [position]);
  return /* @__PURE__ */ jsx(
    motion.li,
    {
      layout: true,
      className: "chakra-toast",
      variants: motionVariants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: onMouseEnter,
      onHoverEnd: onMouseLeave,
      custom: { position },
      style: toastStyle,
      children: /* @__PURE__ */ jsx(
        chakra.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: containerStyles,
          children: runIfFn$1(message, { id, onClose: close })
        }
      )
    }
  );
});
ToastComponent.displayName = "ToastComponent";
function CheckIcon(props) {
  return /* @__PURE__ */ jsx(Icon, { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
__name(CheckIcon, "CheckIcon");
function InfoIcon(props) {
  return /* @__PURE__ */ jsx(Icon, { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
__name(InfoIcon, "InfoIcon");
function WarningIcon(props) {
  return /* @__PURE__ */ jsx(Icon, { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
__name(WarningIcon, "WarningIcon");
var [AlertProvider, useAlertContext] = createContext({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
var [AlertStylesProvider, useAlertStyles] = createContext({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
var STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  loading: { icon: Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
__name(getStatusColorScheme, "getStatusColorScheme");
function getStatusIcon(status) {
  return STATUSES[status].icon;
}
__name(getStatusIcon, "getStatusIcon");
var AlertDescription = forwardRef(
  /* @__PURE__ */ __name(function AlertDescription2(props, ref) {
    const styles2 = useAlertStyles();
    const { status } = useAlertContext();
    const descriptionStyles = {
      display: "inline",
      ...styles2.description
    };
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }, "AlertDescription2")
);
AlertDescription.displayName = "AlertDescription";
function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles2 = useAlertStyles();
  const css2 = status === "loading" ? styles2.spinner : styles2.icon;
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css2,
      children: props.children || /* @__PURE__ */ jsx(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
__name(AlertIcon, "AlertIcon");
AlertIcon.displayName = "AlertIcon";
var AlertTitle = forwardRef(
  /* @__PURE__ */ __name(function AlertTitle2(props, ref) {
    const styles2 = useAlertStyles();
    const { status } = useAlertContext();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles2.title
      }
    );
  }, "AlertTitle2")
);
AlertTitle.displayName = "AlertTitle";
var Alert = forwardRef(/* @__PURE__ */ __name(function Alert2(props, ref) {
  var _a4;
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = (_a4 = props.colorScheme) != null ? _a4 : getStatusColorScheme(status);
  const styles2 = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles2.container
  };
  return /* @__PURE__ */ jsx(AlertProvider, { value: { status }, children: /* @__PURE__ */ jsx(AlertStylesProvider, { value: styles2, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
}, "Alert2"));
Alert.displayName = "Alert";
var initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var toastStore = createStore(initialState);
function createStore(initialState2) {
  let state = initialState2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = /* @__PURE__ */ __name((setStateFn) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  }, "setState");
  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => initialState2);
        listeners.delete(listener);
      };
    },
    removeToast: (id, position) => {
      setState((prevState) => ({
        ...prevState,
        [position]: prevState[position].filter((toast) => toast.id != id)
      }));
    },
    notify: (message, options) => {
      const toast = createToast(message, options);
      const { position, id } = toast;
      setState((prevToasts) => {
        var _a4, _b3;
        const isTop = position.includes("top");
        const toasts = isTop ? [toast, ...(_a4 = prevToasts[position]) != null ? _a4 : []] : [...(_b3 = prevToasts[position]) != null ? _b3 : [], toast];
        return {
          ...prevToasts,
          [position]: toasts
        };
      });
      return id;
    },
    update: (id, options) => {
      if (!id)
        return;
      setState((prevState) => {
        const nextState = { ...prevState };
        const { position, index } = findToast(nextState, id);
        if (position && index !== -1) {
          nextState[position][index] = {
            ...nextState[position][index],
            ...options,
            message: createRenderToast(options)
          };
        }
        return nextState;
      });
    },
    closeAll: ({ positions } = {}) => {
      setState((prev) => {
        const allPositions = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right"
        ];
        const positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce(
          (acc, position) => {
            acc[position] = prev[position].map((toast) => ({
              ...toast,
              requestClose: true
            }));
            return acc;
          },
          { ...prev }
        );
      });
    },
    close: (id) => {
      setState((prevState) => {
        const position = getToastPosition(prevState, id);
        if (!position)
          return prevState;
        return {
          ...prevState,
          [position]: prevState[position].map((toast) => {
            if (toast.id == id) {
              return {
                ...toast,
                requestClose: true
              };
            }
            return toast;
          })
        };
      });
    },
    isActive: (id) => Boolean(findToast(toastStore.getState(), id).position)
  };
}
__name(createStore, "createStore");
var counter = 0;
function createToast(message, options = {}) {
  var _a4, _b3;
  counter += 1;
  const id = (_a4 = options.id) != null ? _a4 : counter;
  const position = (_b3 = options.position) != null ? _b3 : "bottom";
  return {
    id,
    message,
    position,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(id), position),
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}
__name(createToast, "createToast");
var Toast = /* @__PURE__ */ __name((props) => {
  const {
    status,
    variant = "solid",
    id,
    title,
    isClosable,
    onClose,
    description,
    colorScheme,
    icon
  } = props;
  const ids = id ? {
    root: `toast-${id}`,
    title: `toast-${id}-title`,
    description: `toast-${id}-description`
  } : void 0;
  return /* @__PURE__ */ jsxs(
    Alert,
    {
      addRole: false,
      status,
      variant,
      id: ids == null ? void 0 : ids.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme,
      children: [
        /* @__PURE__ */ jsx(AlertIcon, { children: icon }),
        /* @__PURE__ */ jsxs(chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && /* @__PURE__ */ jsx(AlertTitle, { id: ids == null ? void 0 : ids.title, children: title }),
          description && /* @__PURE__ */ jsx(AlertDescription, { id: ids == null ? void 0 : ids.description, display: "block", children: description })
        ] }),
        isClosable && /* @__PURE__ */ jsx(
          CloseButton,
          {
            size: "sm",
            onClick: onClose,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
}, "Toast");
function createRenderToast(options = {}) {
  const { render, toastComponent: ToastComponent2 = Toast } = options;
  const renderToast = /* @__PURE__ */ __name((props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options });
    }
    return /* @__PURE__ */ jsx(ToastComponent2, { ...props, ...options });
  }, "renderToast");
  return renderToast;
}
__name(createRenderToast, "createRenderToast");
var [ToastOptionProvider, useToastOptionContext] = createContext({
  name: `ToastOptionsContext`,
  strict: false
});
var ToastProvider = /* @__PURE__ */ __name((props) => {
  const state = react.exports.useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants,
    component: Component = ToastComponent,
    portalProps
  } = props;
  const stateKeys = Object.keys(state);
  const toastList = stateKeys.map((position) => {
    const toasts = state[position];
    return /* @__PURE__ */ jsx(
      "ul",
      {
        role: "region",
        "aria-live": "polite",
        id: `chakra-toast-manager-${position}`,
        style: getToastListStyle(position),
        children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: toasts.map((toast) => /* @__PURE__ */ jsx(
          Component,
          {
            motionVariants,
            ...toast
          },
          toast.id
        )) })
      },
      position
    );
  });
  return /* @__PURE__ */ jsx(Portal, { ...portalProps, children: toastList });
}, "ToastProvider");
var createChakraProvider = /* @__PURE__ */ __name((providerTheme) => {
  return /* @__PURE__ */ __name(function ChakraProvider2({
    children,
    theme: theme2 = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return /* @__PURE__ */ jsxs(ChakraProvider$1, { theme: theme2, ...restProps, children: [
      /* @__PURE__ */ jsx(ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      /* @__PURE__ */ jsx(ToastProvider, { ...toastOptions })
    ] });
  }, "ChakraProvider2");
}, "createChakraProvider");
var ChakraProvider = createChakraProvider(theme);
var initReactI18next = {
  type: "3rdParty",
  init: /* @__PURE__ */ __name(function init(instance2) {
    setDefaults(instance2.options.react);
    setI18n(instance2);
  }, "init")
};
function I18nextProvider(_ref) {
  var i18n = _ref.i18n, defaultNS = _ref.defaultNS, children = _ref.children;
  var value = react.exports.useMemo(function() {
    return {
      i18n,
      defaultNS
    };
  }, [i18n, defaultNS]);
  return react.exports.createElement(I18nContext.Provider, {
    value
  }, children);
}
__name(I18nextProvider, "I18nextProvider");
const systemPagesPtBr = {
  systemPagesText: {
    alt: "\xEDcone trac.io",
    flags: {
      brazil: "Bandeira do Brasil",
      us: "Bandeira dos EUA"
    },
    menu: {
      dashboard: "Painel",
      products: "Produtos",
      assets: "Ativos",
      workorders: "Ordens de servi\xE7o",
      companies: "Empresas",
      units: "Unidades",
      users: "Usu\xE1rios",
      settings: "Configura\xE7\xF5es",
      logout: "Sair"
    }
  }
};
const systemPagesEn = {
  systemPagesText: {
    alt: "trac.io icon",
    flags: {
      brazil: "Brazil flag",
      us: "US flag"
    },
    menu: {
      dashboard: "Dashboard",
      products: "Products",
      assets: "Assets",
      workorders: "Workorders",
      companies: "Companies",
      units: "Units",
      users: "Users",
      settings: "Settings",
      logout: "Logout"
    }
  }
};
const templatesEn = {
  ...systemPagesEn
};
const templatesPtBr = {
  ...systemPagesPtBr
};
function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return /* @__PURE__ */ __name(function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      }, "unsubscribe");
    }
  };
}
__name(createListenerCollection, "createListenerCollection");
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  __name(addNestedSub, "addNestedSub");
  function notifyNestedSubs() {
    listeners.notify();
  }
  __name(notifyNestedSubs, "notifyNestedSubs");
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  __name(handleChangeWrapper, "handleChangeWrapper");
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  __name(isSubscribed, "isSubscribed");
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  __name(trySubscribe, "trySubscribe");
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  __name(tryUnsubscribe, "tryUnsubscribe");
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
__name(createSubscription, "createSubscription");
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect = canUseDOM ? react.exports.useLayoutEffect : react.exports.useEffect;
function Provider({
  store: store2,
  context,
  children,
  serverState
}) {
  const contextValue = react.exports.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
  }, [store2, serverState]);
  const previousState = react.exports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: contextValue,
    children
  });
}
__name(Provider, "Provider");
const componentsEn = {};
const componentsPtBr = {};
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  }
});
const storePtBr = {
  rxStore: {
    initialSettings: {
      changeResult: "Exemplo personalizando response"
    }
  }
};
const storeEn = {
  rxStore: {
    initialSettings: {
      changeResult: "Example customizing response"
    }
  }
};
var INITIAL_VIEWPORTS = {
  iphone5: {
    name: "iPhone 5",
    styles: {
      height: "568px",
      width: "320px"
    },
    type: "mobile"
  },
  iphone6: {
    name: "iPhone 6",
    styles: {
      height: "667px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone6p: {
    name: "iPhone 6 Plus",
    styles: {
      height: "736px",
      width: "414px"
    },
    type: "mobile"
  },
  iphone8p: {
    name: "iPhone 8 Plus",
    styles: {
      height: "736px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonex: {
    name: "iPhone X",
    styles: {
      height: "812px",
      width: "375px"
    },
    type: "mobile"
  },
  iphonexr: {
    name: "iPhone XR",
    styles: {
      height: "896px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonexsmax: {
    name: "iPhone XS Max",
    styles: {
      height: "896px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonese2: {
    name: "iPhone SE (2nd generation)",
    styles: {
      height: "667px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone12mini: {
    name: "iPhone 12 mini",
    styles: {
      height: "812px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone12: {
    name: "iPhone 12",
    styles: {
      height: "844px",
      width: "390px"
    },
    type: "mobile"
  },
  iphone12promax: {
    name: "iPhone 12 Pro Max",
    styles: {
      height: "926px",
      width: "428px"
    },
    type: "mobile"
  },
  ipad: {
    name: "iPad",
    styles: {
      height: "1024px",
      width: "768px"
    },
    type: "tablet"
  },
  ipad10p: {
    name: "iPad Pro 10.5-in",
    styles: {
      height: "1112px",
      width: "834px"
    },
    type: "tablet"
  },
  ipad12p: {
    name: "iPad Pro 12.9-in",
    styles: {
      height: "1366px",
      width: "1024px"
    },
    type: "tablet"
  },
  galaxys5: {
    name: "Galaxy S5",
    styles: {
      height: "640px",
      width: "360px"
    },
    type: "mobile"
  },
  galaxys9: {
    name: "Galaxy S9",
    styles: {
      height: "740px",
      width: "360px"
    },
    type: "mobile"
  },
  nexus5x: {
    name: "Nexus 5X",
    styles: {
      height: "660px",
      width: "412px"
    },
    type: "mobile"
  },
  nexus6p: {
    name: "Nexus 6P",
    styles: {
      height: "732px",
      width: "412px"
    },
    type: "mobile"
  },
  pixel: {
    name: "Pixel",
    styles: {
      height: "960px",
      width: "540px"
    },
    type: "mobile"
  },
  pixelxl: {
    name: "Pixel XL",
    styles: {
      height: "1280px",
      width: "720px"
    },
    type: "mobile"
  }
};
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0)
          obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
__name(defaults, "defaults");
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = /* @__PURE__ */ __name(function serializeCookie2(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || "/";
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge))
      throw new Error("maxAge should be a Number");
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly)
    str += "; HttpOnly";
  if (opt.secure)
    str += "; Secure";
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}, "serializeCookie");
var cookie = {
  create: /* @__PURE__ */ __name(function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain)
      cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  }, "create"),
  read: /* @__PURE__ */ __name(function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  }, "read"),
  remove: /* @__PURE__ */ __name(function remove(name) {
    this.create(name, "", -1);
  }, "remove")
};
var cookie$1 = {
  name: "cookie",
  lookup: /* @__PURE__ */ __name(function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== "undefined") {
      var c = cookie.read(options.lookupCookie);
      if (c)
        found = c;
    }
    return found;
  }, "lookup"),
  cacheUserLanguage: /* @__PURE__ */ __name(function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== "undefined") {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }, "cacheUserLanguage")
};
var querystring = {
  name: "querystring",
  lookup: /* @__PURE__ */ __name(function lookup2(options) {
    var found;
    if (typeof window !== "undefined") {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      var query = search.substring(1);
      var params = query.split("&");
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf("=");
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }, "lookup")
};
var hasLocalStorageSupport = null;
var localStorageAvailable = /* @__PURE__ */ __name(function localStorageAvailable2() {
  if (hasLocalStorageSupport !== null)
    return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
    var testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
}, "localStorageAvailable");
var localStorage$1 = {
  name: "localStorage",
  lookup: /* @__PURE__ */ __name(function lookup3(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng)
        found = lng;
    }
    return found;
  }, "lookup"),
  cacheUserLanguage: /* @__PURE__ */ __name(function cacheUserLanguage2(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }, "cacheUserLanguage")
};
var hasSessionStorageSupport = null;
var sessionStorageAvailable = /* @__PURE__ */ __name(function sessionStorageAvailable2() {
  if (hasSessionStorageSupport !== null)
    return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== "undefined" && window.sessionStorage !== null;
    var testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
}, "sessionStorageAvailable");
var sessionStorage = {
  name: "sessionStorage",
  lookup: /* @__PURE__ */ __name(function lookup4(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng)
        found = lng;
    }
    return found;
  }, "lookup"),
  cacheUserLanguage: /* @__PURE__ */ __name(function cacheUserLanguage3(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }, "cacheUserLanguage")
};
var navigator$1 = {
  name: "navigator",
  lookup: /* @__PURE__ */ __name(function lookup5(options) {
    var found = [];
    if (typeof navigator !== "undefined") {
      if (navigator.languages) {
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : void 0;
  }, "lookup")
};
var htmlTag = {
  name: "htmlTag",
  lookup: /* @__PURE__ */ __name(function lookup6(options) {
    var found;
    var htmlTag2 = options.htmlTag || (typeof document !== "undefined" ? document.documentElement : null);
    if (htmlTag2 && typeof htmlTag2.getAttribute === "function") {
      found = htmlTag2.getAttribute("lang");
    }
    return found;
  }, "lookup")
};
var path = {
  name: "path",
  lookup: /* @__PURE__ */ __name(function lookup7(options) {
    var found;
    if (typeof window !== "undefined") {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === "number") {
          if (typeof language[options.lookupFromPathIndex] !== "string") {
            return void 0;
          }
          found = language[options.lookupFromPathIndex].replace("/", "");
        } else {
          found = language[0].replace("/", "");
        }
      }
    }
    return found;
  }, "lookup")
};
var subdomain = {
  name: "subdomain",
  lookup: /* @__PURE__ */ __name(function lookup8(options) {
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === "number" ? options.lookupFromSubdomainIndex + 1 : 1;
    var language = typeof window !== "undefined" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (!language)
      return void 0;
    return language[lookupFromSubdomainIndex];
  }, "lookup")
};
function getDefaults() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"]
  };
}
__name(getDefaults, "getDefaults");
var Browser = /* @__PURE__ */ function() {
  function Browser2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Browser2);
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  __name(Browser2, "Browser");
  _createClass(Browser2, [{
    key: "init",
    value: /* @__PURE__ */ __name(function init2(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
      if (this.options.lookupFromUrlIndex)
        this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage$1);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }, "init")
  }, {
    key: "addDetector",
    value: /* @__PURE__ */ __name(function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }, "addDetector")
  }, {
    key: "detect",
    value: /* @__PURE__ */ __name(function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder)
        detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function(detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup9 = _this.detectors[detectorName].lookup(_this.options);
          if (lookup9 && typeof lookup9 === "string")
            lookup9 = [lookup9];
          if (lookup9)
            detected = detected.concat(lookup9);
        }
      });
      if (this.services.languageUtils.getBestMatchFromCodes)
        return detected;
      return detected.length > 0 ? detected[0] : null;
    }, "detect")
  }, {
    key: "cacheUserLanguage",
    value: /* @__PURE__ */ __name(function cacheUserLanguage4(lng, caches) {
      var _this2 = this;
      if (!caches)
        caches = this.options.caches;
      if (!caches)
        return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1)
        return;
      caches.forEach(function(cacheName) {
        if (_this2.detectors[cacheName])
          _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }, "cacheUserLanguage")
  }]);
  return Browser2;
}();
Browser.type = "languageDetector";
const homePtBr = {
  pgHome: {
    text: "Pokelist",
    text_2: "Capture todas as cartas dos Pok\xE9mons",
    text_3: "128k+ treinadores, capture todos eles",
    heading: "Bem-vindo, treinador de Pok\xE9mon! Vamos capturar todos juntos!",
    btn: "Capture os Pok\xE9mons",
    languages: {
      pt: "PT",
      en: "EN"
    },
    altImg: {
      pokemon: "Pokemon logo image",
      firered: "Charizard Pokemon",
      pikachu: "Pikachu Pokemon"
    }
  }
};
const homeEn = {
  pgHome: {
    text: "Pokelist",
    text_2: "Catch all of the Pok\xE9mon cards",
    text_3: "128k+ trainer, catch em all",
    heading: `Welcome, Pok\xE9mon trainer! Let's catch 'em all together!`,
    btn: "Catch Pok\xE9mon",
    languages: {
      pt: "PT",
      en: "EN"
    },
    altImg: {
      pokemon: "Pokemon logo image",
      firered: "Firered Pokemon",
      pikachu: "Pikachu Pokemon"
    }
  }
};
const listPtBr = {
  pgList: {
    btn_back: "Voltar",
    table: {
      title: "Pokelist",
      head: ["Nome", "Favorito", "Ver cart\xE3o"],
      caption: '"Ash jogou a Pokebola, capturando o Pikachu com sucesso."'
    },
    modal: {
      btn_close: "Fechar"
    }
  }
};
const listEn = {
  pgList: {
    btn_back: "Back",
    table: {
      title: "Pokelist",
      head: ["Name", "Favorite", "View card"],
      caption: '"Ash threw the Pokeball, successfully capturing Pikachu."'
    },
    modal: {
      btn_close: "Close"
    }
  }
};
const pagesEn = {
  ...homeEn,
  ...listEn
};
const pagesPtBr = {
  ...homePtBr,
  ...listPtBr
};
const locales = {
  en: {
    ...pagesEn,
    ...componentsEn,
    ...storeEn,
    ...templatesEn
  },
  ptbr: {
    ...pagesPtBr,
    ...componentsPtBr,
    ...storePtBr,
    ...templatesPtBr
  }
};
instance.use(Browser).use(initReactI18next).init({
  resources: locales,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});
const customViewports = {
  desktopMd: {
    name: "Desktop Md",
    styles: {
      width: "992px",
      height: "963px"
    }
  },
  desktopLg: {
    name: "Desktop Lg",
    styles: {
      width: "1200px",
      height: "963px"
    }
  },
  desktopXl: {
    name: "Desktop Xl",
    styles: {
      width: "1400px",
      height: "963px"
    }
  },
  desktopHg: {
    name: "Desktop Hg",
    styles: {
      width: "2000px",
      height: "963px"
    }
  },
  ...INITIAL_VIEWPORTS
};
const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: themes.dark
  },
  viewport: {
    viewports: customViewports
  }
};
const globalTypes = {
  locale: {
    name: "Locale",
    defaultValue: "en",
    description: "Internationalization locale",
    toolbar: {
      title: "Language",
      icon: "globe",
      items: [{
        value: "ptbr",
        right: "br",
        title: "Portuguese"
      }, {
        value: "en",
        right: "\u{1F1FA}\u{1F1F8}",
        title: "English"
      }]
    }
  }
};
instance.on("languageChanged", (locale) => {
  const direction2 = instance.dir(locale);
  document.dir = direction2;
});
const decorators = [(Story, context) => {
  const {
    locale
  } = context.globals;
  react.exports.useEffect(() => {
    instance.changeLanguage(locale);
  }, [locale]);
  return /* @__PURE__ */ jsx(ChakraProvider, {
    children: /* @__PURE__ */ jsx(react.exports.Suspense, {
      fallback: /* @__PURE__ */ jsx("h1", {
        children: "Loading..."
      }),
      children: /* @__PURE__ */ jsx(Provider, {
        store,
        children: /* @__PURE__ */ jsx(MyThemeProvider, {
          children: /* @__PURE__ */ jsx(I18nextProvider, {
            i18n: instance,
            children: /* @__PURE__ */ jsx(BrowserRouter, {
              children: /* @__PURE__ */ jsx(Story, {})
            })
          })
        })
      })
    })
  });
}];
export {
  decorators,
  globalTypes,
  parameters
};
