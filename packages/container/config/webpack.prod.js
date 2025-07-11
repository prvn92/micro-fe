const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const deps = require('../package.json').dependencies;

const domain = process.env.DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@' + domain + '/marketing/remoteEntry.js',
      },
      shared: {
        ...deps,
      },
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);
