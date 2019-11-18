const { override, useEslintRc } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(useEslintRc(), (config, env) => {
  config = rewireReactHotLoader(config, env);

  //do stuff with the webpack config...
  return config;
});
