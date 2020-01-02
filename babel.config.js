/*
babel.config.js

Presets and Plugins for babel...

Eric Foster
*/

module.exports = function (api) {
  api.cache(true)

// Enter presets and plugins into respective js constants...
  const presets = ["@babel/env"]
  const plugins = ["@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-async-to-generator",
    ["@babel/plugin-transform-react-jsx", {"pragma": "x", "pragmaFrag": "Valence.Fragment"}]
  ]
// Return presets and plugins...
  return {
    presets,
    plugins
  }
}
