const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     clean: true,
//   },

output: {
  publicPath: 'auto',
},

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  
  plugins: [
     new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  // },
};
