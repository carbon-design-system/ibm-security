/**
 * @file webpack configuration.
 * @copyright IBM Security 2019
 */

// const { BRANCH, CIRCLE_BRANCH } = process.env;

process.env.STORYBOOK_BRANCH = require('git-branch').sync();

module.exports = config => {
  [
    {
      test: /\.stories\.js$/,
      use: '@storybook/source-loader',
    },
    {
      sideEffects: true,
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 2 },
        },
        'postcss-loader',
        {
          loader: 'fast-sass-loader',
          options: {
            includePaths: ['node_modules'],
          },
        },
      ],
    },
  ].forEach(rule => config.module.rules.push(rule));

  return config;
};
