/**
 * @file Webpack Bundle Analyzer configuration.
 * @copyright IBM Security 2020
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const configuration = require('../../.babelrc');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            ...configuration({ env: () => null }),
          },
        },
      },
    ],
  },

  plugins: [new BundleAnalyzerPlugin()],
};
