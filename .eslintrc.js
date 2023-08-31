module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react-hooks'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-var-requires": "off",
        "react-hooks/exhaustive-deps": "off",

        "no-console": "off",

        // Best Practices
        eqeqeq: "error",
        "no-return-assign": "error",
        "no-useless-concat": "error",

        // Stylistic Issues
        "array-bracket-spacing": "error",
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "block-spacing": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "func-call-spacing": "error",
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
        "no-tabs": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-property-newline": [
            "error",
            { allowAllPropertiesOnSameLine: true },
        ],
        "quote-props": ["error", "as-needed"],
        "semi-spacing": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",

        // ES6
        "arrow-spacing": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
    },
};