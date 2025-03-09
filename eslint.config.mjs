import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "eslint-plugin-next";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import promise from "eslint-plugin-promise";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const compat = new FlatCompat();

export default [
  js.configs.recommended, // Bonnes pratiques JS
  tseslint.configs.recommended, // TypeScript
  tseslint.configs.strict, // Vérifications strictes pour éviter les erreurs
  next.configs.recommended, // Optimisation Next.js
  react.configs.recommended, // Meilleures pratiques React
  reactHooks.configs.recommended, // Sécurise les hooks React
  promise.configs.recommended, // Sécurise les promesses
  prettierConfig, // Désactive les règles en conflit avec Prettier
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error", // Applique les règles de formatage Prettier
      "react/react-in-jsx-scope": "off", // Pas besoin d'importer React avec Next.js
      "react-hooks/exhaustive-deps": "warn", // Vérifie les dépendances des hooks
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore les variables inutilisées qui commencent par '_'
      "@typescript-eslint/consistent-type-imports": "warn", // Encourage les imports `import type`
      "no-console": "warn", // Évite les console.log dans le code
      "no-debugger": "warn", // Évite les debugger dans le code
    },
  },
];