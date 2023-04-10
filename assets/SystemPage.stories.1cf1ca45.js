var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { t } from "./i18next.3736d4ed.js";
import { S as SystemPage } from "./SystemPage.ea405026.js";
import { j as jsx } from "./jsx-runtime.1846cd15.js";
import "./defineProperty.317be907.js";
import "./emotion-styled.browser.esm.cceb3f76.js";
import "./iframe.16f10e94.js";
import "./Section.7d097e59.js";
import "./setPrototypeOf.08579ea5.js";
const SystemPage_stories = {
  parameters: {
    "storySource": {
      "source": "import { Story } from '@storybook/react'\r\nimport { t } from 'i18next'\r\n\r\nimport SystemPage from './SystemPage'\r\n\r\nexport default {\r\n  component: SystemPage,\r\n  title: 'Templates/SystemPage',\r\n  args: {}\r\n}\r\n\r\nconst Template: Story = (args) => <SystemPage.Root {...args} />\r\n\r\nexport const Default = Template.bind({})\r\n\r\nconst TemplateWithHeader: Story = (args) => (\r\n  <SystemPage.Root>\r\n    <SystemPage.Header {...args} />\r\n  </SystemPage.Root>\r\n)\r\n\r\nexport const WithHeader = TemplateWithHeader.bind({})\r\nWithHeader.args = {\r\n  title: t('pgDashboard:title')\r\n}\r\n",
      "locationsMap": {
        "default": {
          "startLoc": {
            "col": 24,
            "line": 12
          },
          "endLoc": {
            "col": 63,
            "line": 12
          },
          "startBody": {
            "col": 24,
            "line": 12
          },
          "endBody": {
            "col": 63,
            "line": 12
          }
        },
        "with-header": {
          "startLoc": {
            "col": 34,
            "line": 16
          },
          "endLoc": {
            "col": 1,
            "line": 20
          },
          "startBody": {
            "col": 34,
            "line": 16
          },
          "endBody": {
            "col": 1,
            "line": 20
          }
        }
      }
    }
  },
  component: SystemPage,
  title: "Templates/SystemPage",
  args: {}
};
const Template = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(SystemPage.Root, {
  ...args
}), "Template");
const Default = Template.bind({});
const TemplateWithHeader = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(SystemPage.Root, {
  children: /* @__PURE__ */ jsx(SystemPage.Header, {
    ...args
  })
}), "TemplateWithHeader");
const WithHeader = TemplateWithHeader.bind({});
WithHeader.args = {
  title: t("pgDashboard:title")
};
const __namedExportsOrder = ["Default", "WithHeader"];
export {
  Default,
  WithHeader,
  __namedExportsOrder,
  SystemPage_stories as default
};
