import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import functional from "eslint-plugin-functional";
import imprt from "eslint-plugin-import";

const myRules = {
  "@react-hooks/rules-of-hooks": "off",
  "@next/next/no-duplicate-head": "off",
};

export default [
  {
    rules: myRules,
  },
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react-hooks/rules-of-hooks": "off",
    },
    settings: {
      react: {
        version: "detect", // You can add this if you get a warning about the React version when you lint
      },
    },
  },
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "off",
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react-hooks/rules-of-hooks": "off",
    },
  },
  {
    ignores: [
      ".next/*",
      "src/app/categories/[id]/page.tsx",
      "src/modules/categories/hooks/useCategory.ts",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      functional,
      import: imprt,
      "@typescript-eslint": ts,
      ts,
    },
    rules: {
      ...ts.configs["eslint-recommended"].rules,
      ...ts.configs["recommended"].rules,
      ...myRules,
      "react-hooks/rules-of-hooks": "off",
      "ts/return-await": 2,
    },
  },
];
