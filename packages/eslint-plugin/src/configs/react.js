// @ts-check
"use strict";

const react = require("eslint-plugin-react");
// @ts-expect-error Could not find a declaration file for module
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  react.configs.flat?.recommended ?? {
    plugins: { react },
    rules: react.configs.recommended.rules,
    languageOptions: { parserOptions: react.configs.recommended.parserOptions },
  },
  {
    name: "rnx-kit/react",
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "react/prop-types": "off",
      ...reactHooks.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
