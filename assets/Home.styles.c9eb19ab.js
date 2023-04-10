var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { G as Global, c as css, k as keyframes } from "./index.8b3f396e.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.1846cd15.js";
import { a as ThemeProvider, n as newStyled } from "./emotion-styled.browser.esm.cceb3f76.js";
import { C as Container, B as Box } from "./Section.7d097e59.js";
const colors = {
  black: "#111315",
  white: "#ffffff",
  primary: {
    light: "#F4EEE0",
    medium: "#6D5D6E",
    dark: "#4F4557",
    darkest: "#393646"
  }
};
const theme = {
  font: {
    family: "Roboto, Arial",
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      10: "0.625rem",
      12: "0.750rem",
      14: "0.875rem",
      base: "1rem",
      20: "1.250rem",
      22: "1.375rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3.5rem"
    }
  },
  breakpoints: {
    tn: "20rem",
    xs: "36rem",
    sm: "48rem",
    md: "62rem",
    lg: "75rem",
    xl: "87.5rem",
    hg: "125rem"
  },
  spacing: {
    px: "0.063rem",
    0: "0",
    0.25: "0.125rem",
    0.5: "0.250rem",
    1: "0.5rem",
    2: "1rem",
    3: "1.5rem",
    4: "2rem",
    5: "2.5rem",
    6: "3rem",
    7: "3.5rem",
    8: "4rem",
    9: "4.5rem",
    10: "5rem",
    11: "5.5rem",
    12: "6rem",
    13: "6.5rem",
    14: "7rem"
  },
  border: {
    px: "1px",
    0: 0,
    0.25: "0.125rem",
    0.5: "0.250rem",
    1: "0.5rem",
    radius: {
      px: "1px",
      0: 0,
      0.5: "0.250rem",
      1: "0.5rem",
      2: "1rem",
      3: "1.5em",
      circle: "9999px"
    }
  },
  boxShadow: {
    0: "none",
    1: `0 0.125rem 0.250rem 0 rgba(58, 70, 79, 0.24)`,
    2: `0 0.375rem 0.375rem 0 rgba(0, 0, 0, .25)`
  },
  opacity: {
    0: 0,
    1: 0.08,
    2: 0.16,
    4: 0.32,
    8: 0.64,
    10: 0.8,
    100: 1
  },
  colors: {
    black: colors.black,
    white: colors.white,
    primary: {
      light: colors.primary.light,
      medium: colors.primary.medium,
      dark: colors.primary.dark,
      darkest: colors.primary.darkest
    }
  }
};
const MyThemeProvider = /* @__PURE__ */ __name(({
  children
}) => {
  return /* @__PURE__ */ jsxs(ThemeProvider, {
    theme,
    children: [/* @__PURE__ */ jsx(Global, {
      styles: css`
          * {
            margin: ${theme.spacing[0]};
            outline: ${theme.spacing[0]};
            padding: ${theme.spacing[0]};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html,
          body,
          #root {
            height: 100%;
          }
          body {
            font-family: ${theme.font.family};
            scroll-behavior: smooth;
            line-height: 1.2;
            background-color: ${theme.colors.black};
          }
          input,
          button,
          textarea,
          select {
            font: inherit;
          }
        `
    }), children]
  });
}, "MyThemeProvider");
try {
  MyThemeProvider.displayName = "MyThemeProvider";
  MyThemeProvider.__docgenInfo = { "description": "", "displayName": "MyThemeProvider", "props": {} };
  if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
    STORYBOOK_REACT_CLASSES["src/styles/MyThemeProvider.tsx#MyThemeProvider"] = { docgenInfo: MyThemeProvider.__docgenInfo, name: "MyThemeProvider", path: "src/styles/MyThemeProvider.tsx#MyThemeProvider" };
} catch (__react_docgen_typescript_loader_error) {
}
const pokeLogoAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }

  25% {
    transform: translateX(20px) rotateY(15deg);
  }

  50% {
    transform: translateX(0px);
  }

  75% {
    transform: translateX(-20px) rotateY(-15deg);
  }

  100% {
    transform: translateX(0px);
  }
`;
const leftAnimation = keyframes`
    0% {
    transform: translateX(+25px);
    opacity: 0;
  }

  50% {
    transform: translateX(+25px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;
const rightAnimation = keyframes`
  0% {
    transform: translateX(-25px);
    opacity: 0;
  }

  50% {
    transform: translateX(-25px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;
newStyled.main``;
const Section = newStyled.section`
  display: flex;
  height: 100vh;

  .blur {
    filter: blur(8px);
  }
`;
const StyledContainer = newStyled(Container)`
  align-items: center;
  display: flex;
`;
const AsideBox = newStyled(Box)`
  z-index: 2;
`;
const AnimationBox = newStyled(Box)`
  display: none;
  min-width: 40%;
  padding: 40px;
  position: relative;
  top: 4%;

  .pokemonLogoImg {
    animation: ${pokeLogoAnimation} 1s ease-in-out;
    position: absolute;
    top: -15%;
    z-index: 1;
  }

  .fireredImg {
    animation: ${leftAnimation} 1s ease-in-out;
    position: absolute;
    right: 45%;
    top: 20%;
  }

  .pikachuImg {
    animation: ${rightAnimation} 1s ease-in-out;
    position: absolute;
    left: 40%;
    top: 20%;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`;
export {
  AsideBox as A,
  MyThemeProvider as M,
  Section as S,
  StyledContainer as a,
  AnimationBox as b
};
