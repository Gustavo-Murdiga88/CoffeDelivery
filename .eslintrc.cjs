module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/extensions": ["error", { routes: "ignorePackages" }],
    "import/no-unresolved": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        allowParens: true,
        trailingComma: "all",
        singleQuote: false,
      },
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/jsx-props-no-spreading": "off",
    "no-debugger": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-constructed-context-values": "off",
    "no-nested-ternary": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "no-param-reassign": ["warn", { props: false }],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    react: {
      version: "detect",
    },
  },
};
