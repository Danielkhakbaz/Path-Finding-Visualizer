// import globals from "globals";
// import react from "eslint-plugin-react";
// import next from "@next/eslint-plugin-next";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import typescriptParser from "@typescript-eslint/parser";
// import reactRecommended from "eslint-plugin-react/configs/recommended.js";

// export default [
//   {
//     ignores: [".husky/**/*", ".next/**/*", "node_modules/**/*", ".vscode/**/*"],
//   },
//   {
//     files: ["**/*.{ts,tsx}"],
//     ...reactRecommended,
//     settings: {
//       version: "detect",
//     },
//     languageOptions: {
//       ...reactRecommended.languageOptions,
//       ecmaVersion: "latest",
//       sourceType: "module",
//       parser: typescriptParser,
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//       globals: {
//         ...globals.serviceworker,
//         ...globals.browser,
//       },
//     },
//     plugins: {
//       "@typescript-eslint": typescriptEslint,
//       react,
//       next,
//     },
//     rules: {
//       "react/jsx-no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": ["error"],
//       "react/react-in-jsx-scope": 0,
//       "spaced-comment": ["error", "always", { markers: ["/"] }],
//       "new-cap": 0,
//     },
//   },
// ];

import globals from "globals";
import react from "eslint-plugin-react";
import next from "@next/eslint-plugin-next"; // Correctly import Next.js plugin
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [".husky/**/*", ".next/**/*", "node_modules/**/*", ".vscode/**/*"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
      next,
    },
    rules: {
      "react/jsx-no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "react/react-in-jsx-scope": 0,
      "spaced-comment": ["error", "always", { markers: ["/"] }],
      "new-cap": 0,
      // Include Next.js recommended rules directly
      "next/no-html-link-for-pages": "error", // Example rule
      "next/no-img-element": "warn", // Example rule
      // Add other Next.js rules as necessary
    },
  },
];
