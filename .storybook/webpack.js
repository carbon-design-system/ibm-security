/**
 * @file webpack configuration.
 * @copyright IBM Security 2019
 */

const { sync } = require('git-branch');

const { BRANCH, CIRCLE_BRANCH } = process.env;

// Pass the branch name from Netlify, CircleCI, or the local branch.
process.env.STORYBOOK_BRANCH = BRANCH || CIRCLE_BRANCH || sync();

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
