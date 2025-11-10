import nextPlugin from "@next/eslint-plugin-next";
import myConfig from "@sparticuz/eslint-config";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import hooksPlugin from "eslint-plugin-react-hooks";
// import tailwind from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    name: "Ignore Next folder",

    ignores: [".next"],
  },
  ...myConfig,
  importPlugin.flatConfigs.react,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        callees: ["cn"],
      },
    },
  },
  // @ts-expect-error The types are busted
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  // ...tailwind.configs["flat/recommended"],
  // @ts-expect-error The types are busted
  nextPlugin.flatConfig.recommended,
  // @ts-expect-error The types are busted
  nextPlugin.flatConfig.coreWebVitals,
  hooksPlugin.configs["recommended-latest"],
  reactCompilerPlugin.configs.recommended,
  {
    name: "My Local Options",
    rules: {
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      /**
       * Not sure why this isn't default
       */
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "func-style": ["warn", "expression"],
      "import/no-default-export": "warn",
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "perfectionist/sort-modules": [
        "warn",
        {
          groups: [
            "declare-enum",
            "export-enum",
            "enum",
            ["declare-interface", "declare-type"],
            ["export-interface", "export-type"],
            ["interface", "type"],
            "declare-class",
            "class",
            "export-class",
            "declare-function",
            "function",
            "export-function",
          ],
        },
      ],
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "security/detect-object-injection": "off",
      "sonarjs/no-commented-code": "off",
      "sonarjs/no-dead-store": "warn",
      /**
       * I find it more useful to be explicit
       */
      "sonarjs/no-undefined-argument": "off",
      "sonarjs/no-unused-vars": "off",
      "unicorn/filename-case": "off",
      /**
       * I find it more useful to be explicit
       */
      "unicorn/no-useless-undefined": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
  {
    name: "Override rules for Next.js Files",

    files: ["**/page.tsx", "**/layout.tsx", "**/loading.tsx"],
    rules: {
      "func-style": "off",
      "import/no-default-export": "off",
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "function-expression",
        },
      ],
    },
  },
  {
    name: "Override rules for Top Level Config files",

    files: ["*.config.ts", "*.config.js"],
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    name: "Bugged Rules",
    rules: {
      "n/no-missing-import": "off",
      /**
       * This doesn't work with webpack?
       */
      "unicorn/prefer-node-protocol": "off",
    },
  },
);
