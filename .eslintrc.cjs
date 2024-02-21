module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: [".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {},
};
