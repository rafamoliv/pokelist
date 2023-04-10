var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { M as Modal } from "./Modal.a79adc81.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.1846cd15.js";
import "./Footer.3aa5ff16.js";
import "./defineProperty.317be907.js";
import "./emotion-styled.browser.esm.cceb3f76.js";
import "./iframe.16f10e94.js";
import "./Loading.895aa625.js";
import "./index.733ac91e.js";
import "./index.0458719a.js";
import "./index.46dda1c5.js";
import "./setPrototypeOf.08579ea5.js";
import "./index.b3810c98.js";
const Modal_stories = {
  parameters: {
    "storySource": {
      "source": "import { Story } from '@storybook/react'\r\nimport { t } from 'i18next'\r\n\r\nimport Modal from './Modal'\r\n\r\nexport default {\r\n    component: Modal,\r\n    title: 'Components/Modal',\r\n    args: {\r\n        isOpen: true,\r\n        onClose: () => console.log('close'),\r\n        loading: false\r\n    }\r\n}\r\n\r\nconst Template: Story = (args) => (\r\n    <Modal.Root {...args}>\r\n        <Modal.Body>\r\n            Body\r\n        </Modal.Body>\r\n        <Modal.Footer>\r\n            Footer\r\n        </Modal.Footer>\r\n    </Modal.Root>\r\n)\r\n\r\nexport const Default = Template.bind({})\r\n\r\nconst TemplateLoading: Story = (args) => (\r\n    <Modal.Root {...args} />\r\n)\r\n\r\nexport const Loading = TemplateLoading.bind({})\r\nLoading.args = {\r\n    loading: true\r\n}\r\n\r\nconst TemplateWithBody: Story = (args) => (\r\n    <Modal.Root isOpen loading={false}>\r\n        <Modal.Body {...args} />\r\n    </Modal.Root>\r\n)\r\n\r\nexport const WithBody = TemplateWithBody.bind({})\r\nWithBody.args = {\r\n    children: 'Body'\r\n}\r\n\r\nconst TemplateWithFooter: Story = (args) => (\r\n    <Modal.Root isOpen loading={false}>\r\n        <Modal.Footer {...args} />\r\n    </Modal.Root>\r\n)\r\n\r\nexport const WithFooter = TemplateWithFooter.bind({})\r\nWithFooter.args = {\r\n    children: 'Footer'\r\n}",
      "locationsMap": {
        "default": {
          "startLoc": {
            "col": 24,
            "line": 16
          },
          "endLoc": {
            "col": 1,
            "line": 25
          },
          "startBody": {
            "col": 24,
            "line": 16
          },
          "endBody": {
            "col": 1,
            "line": 25
          }
        },
        "loading": {
          "startLoc": {
            "col": 31,
            "line": 29
          },
          "endLoc": {
            "col": 1,
            "line": 31
          },
          "startBody": {
            "col": 31,
            "line": 29
          },
          "endBody": {
            "col": 1,
            "line": 31
          }
        },
        "with-body": {
          "startLoc": {
            "col": 32,
            "line": 38
          },
          "endLoc": {
            "col": 1,
            "line": 42
          },
          "startBody": {
            "col": 32,
            "line": 38
          },
          "endBody": {
            "col": 1,
            "line": 42
          }
        },
        "with-footer": {
          "startLoc": {
            "col": 34,
            "line": 49
          },
          "endLoc": {
            "col": 1,
            "line": 53
          },
          "startBody": {
            "col": 34,
            "line": 49
          },
          "endBody": {
            "col": 1,
            "line": 53
          }
        }
      }
    }
  },
  component: Modal,
  title: "Components/Modal",
  args: {
    isOpen: true,
    onClose: () => console.log("close"),
    loading: false
  }
};
const Template = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsxs(Modal.Root, {
  ...args,
  children: [/* @__PURE__ */ jsx(Modal.Body, {
    children: "Body"
  }), /* @__PURE__ */ jsx(Modal.Footer, {
    children: "Footer"
  })]
}), "Template");
const Default = Template.bind({});
const TemplateLoading = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Modal.Root, {
  ...args
}), "TemplateLoading");
const Loading = TemplateLoading.bind({});
Loading.args = {
  loading: true
};
const TemplateWithBody = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Modal.Root, {
  isOpen: true,
  loading: false,
  children: /* @__PURE__ */ jsx(Modal.Body, {
    ...args
  })
}), "TemplateWithBody");
const WithBody = TemplateWithBody.bind({});
WithBody.args = {
  children: "Body"
};
const TemplateWithFooter = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(Modal.Root, {
  isOpen: true,
  loading: false,
  children: /* @__PURE__ */ jsx(Modal.Footer, {
    ...args
  })
}), "TemplateWithFooter");
const WithFooter = TemplateWithFooter.bind({});
WithFooter.args = {
  children: "Footer"
};
const __namedExportsOrder = ["Default", "Loading", "WithBody", "WithFooter"];
export {
  Default,
  Loading,
  WithBody,
  WithFooter,
  __namedExportsOrder,
  Modal_stories as default
};
