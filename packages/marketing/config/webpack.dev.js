const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
    output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
    shared:packageJson.dependencies,

    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
