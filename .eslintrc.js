module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    ignorePatterns: ["node_modules", "build"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"

    ],
    "rules": {
        semi: ["error", "never"],
        "@typescript-eslint/explicit-function-return-type": ["error"]
    },
}
