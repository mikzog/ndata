const path = require('path');
const {
  override,
  useEslintRc,
  addLessLoader,
  fixBabelImports,
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = override(
  useEslintRc(),
  addLessLoader({
    localIdentName: '[name]__[local]___[hash:base64:5]',
    modifyVars: {
      hack: `true; @import "${path.resolve(
        __dirname,
        './src/assets/less/theme.less'
      )}";`, // Override with less file
    },
    javascriptEnabled: true,
  }),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env);

    // Add plugins
    config.plugins.push(new MonacoWebpackPlugin());

    //do stuff with the webpack config...
    return config;
  }
);
