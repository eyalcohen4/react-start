module.exports = {
    "extends": "airbnb",
    "globals": {
      "document": true
    },
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "./webpack/webpack.base.js",
        }
      }
    },
    "plugins": [
      "prettier",
    ],
    "rules": {
      "prettier/prettier": ["error", {
        "singleQuote": true,
      }],
    },
};
