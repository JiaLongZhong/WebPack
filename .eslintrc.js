module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "max-len": [1, 300, 2, { "ignoreComments": true }],
        "no-console": "off",
        "no-unused-vars": "off",
        "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
    }
};
