const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const deps = require('../package.json').dependencies;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: {
        ...deps,
      },
    }),

  ],
};

module.exports = merge(commonConfig, prodConfig);
