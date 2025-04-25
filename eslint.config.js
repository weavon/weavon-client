import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // External modules
            "internal", // Internal modules
            ["parent", "sibling", "index"], // Parent, sibling, and index files
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "after",
            },
            {
              pattern: "react-dom",
              group: "builtin",
              position: "after",
            },
            {
              pattern: "react-router-dom",
              group: "builtin",
              position: "after",
            },
            {
              pattern: "react-hook-form",
              group: "external",
              position: "after",
            },
            {
              pattern: "@hookform/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "react-query",
              group: "external",
              position: "after",
            },
            {
              pattern: "@tanstack/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "react-i18next",
              group: "external",
              position: "after",
            },
            {
              pattern: "@i18next/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "zod",
              group: "external",
              position: "after",
            },
            {
              pattern: "zustand",
              group: "external",
              position: "after",
            },
            {
              pattern: "zustand/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "@mui/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "styled-components",
              group: "external",
              position: "after",
            },
            {
              pattern: "@apis/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@assets/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@components/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@configs/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@models/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@pages/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@routers/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@stores/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@utils/**",
              group: "internal",
              position: "after",
            },
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: [],
        },
      ],
    },
  },
);
