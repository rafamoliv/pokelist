var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { L as Loading } from "./Loading.895aa625.js";
import { j as jsx } from "./jsx-runtime.1846cd15.js";
import "./emotion-styled.browser.esm.cceb3f76.js";
import "./index.733ac91e.js";
import "./index.0458719a.js";
import "./iframe.16f10e94.js";
const Loading_stories = {
  parameters: {
    "storySource": {
      "source": "import { Story } from '@storybook/react'\r\nimport { t } from 'i18next'\r\n\r\nimport { Loading } from './Loading'\r\n\r\nexport default {\r\n  component: Loading,\r\n  title: 'Components/Loading',\r\n  args: {}\r\n}\r\n\r\nconst Template: Story = (args) => <Loading {...args} />\r\n\r\nexport const Default = Template.bind({})\r\n\r\nconst TemplateSmall: Story = (args) => <Loading {...args} />\r\n\r\nexport const Small = TemplateSmall.bind({})\r\nSmall.args = {\r\n  size: 'sm'\r\n}\r\n\r\nconst TemplateMedium: Story = (args) => <Loading {...args} />\r\n\r\nexport const Medium = TemplateMedium.bind({})\r\nMedium.args = {\r\n  size: 'md'\r\n}\r\n\r\nconst TemplateBigger: Story = (args) => <Loading {...args} />\r\n\r\nexport const Bigger = TemplateBigger.bind({})\r\nBigger.args = {\r\n  size: 'bg'\r\n}\r\n",
      "locationsMap": {
        "default": {
          "startLoc": {
            "col": 24,
            "line": 12
          },
          "endLoc": {
            "col": 55,
            "line": 12
          },
          "startBody": {
            "col": 24,
            "line": 12
          },
          "endBody": {
            "col": 55,
            "line": 12
          }
        },
        "small": {
          "startLoc": {
            "col": 29,
            "line": 16
          },
          "endLoc": {
            "col": 60,
            "line": 16
          },
          "startBody": {
            "col": 29,
            "line": 16
          },
          "endBody": {
            "col": 60,
            "line": 16
          }
        },
        "medium": {
          "startLoc": {
            "col": 30,
            "line": 23
          },
          "endLoc": {
            "col": 61,
            "line": 23
          },
          "startBody": {
            "col": 30,
            "line": 23
          },
          "endBody": {
            "col": 61,
            "line": 23
          }
        },
        "bigger": {
          "startLoc": {
            "col": 30,
            "line": 30
          },
          "endLoc": {
            "col": 61,
            "line": 30
          },
          "startBody": {
            "col": 30,
            "line": 30
          },
          "endBody": {
            "col": 61,
            "line": 30
          }
        }
      }
    }
  },
  component: Loading,
  title: "Components/Loading",
  args: {}
};
const Template = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Loading, {
  ...args
}), "Template");
const Default = Template.bind({});
const TemplateSmall = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Loading, {
  ...args
}), "TemplateSmall");
const Small = TemplateSmall.bind({});
Small.args = {
  size: "sm"
};
const TemplateMedium = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Loading, {
  ...args
}), "TemplateMedium");
const Medium = TemplateMedium.bind({});
Medium.args = {
  size: "md"
};
const TemplateBigger = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Loading, {
  ...args
}), "TemplateBigger");
const Bigger = TemplateBigger.bind({});
Bigger.args = {
  size: "bg"
};
const __namedExportsOrder = ["Default", "Small", "Medium", "Bigger"];
export {
  Bigger,
  Default,
  Medium,
  Small,
  __namedExportsOrder,
  Loading_stories as default
};
