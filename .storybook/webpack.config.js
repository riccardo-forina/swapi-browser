const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const appConfig = require('../webpack.common');

module.exports = ({ config }) => {  
  config.module.rules.push(...appConfig.module.rules);
  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, "../tsconfig.json")
    })
  ];
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};