const { override, useEslintRc } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = override(useEslintRc(), (config, env) => {
  config = rewireReactHotLoader(config, env);

  // Add plugins
  config.plugins.push(new MonacoWebpackPlugin());

  //do stuff with the webpack config...
  return config;
});
