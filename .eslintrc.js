module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "ignorePatterns": ["built/**/*", "*.js"],
  "rules": {
      "@typescript-eslint/type-annotation-spacing": "warn",
      "@typescript-eslint/no-this-alias": "off",
      "keyword-spacing": ["error", { "after": true }],
      "semi": ["error", "always"],
      "quotes": [2, "double"]
  }
};
