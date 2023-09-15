module.exports = {
  // All eslint rules. Prettier last to overwrite eslint rules
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  // path to the typescript config file
  parserOptions: {
    project: "./tsconfig.json",
  },
  // Exclude this file
  ignorePatterns: [".eslintrc.cjs"],
};
