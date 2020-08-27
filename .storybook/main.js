/**
 * @file Configuration.
 * @copyright IBM Security 2020
 */

const { sync } = require('git-branch');
const { merge } = require('webpack-merge');

const { BRANCH, CIRCLE_BRANCH } = process.env;

// Pass the branch name from Netlify, CircleCI, or the local branch.
process.env.STORYBOOK_BRANCH = BRANCH || CIRCLE_BRANCH || sync();

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-google-analytics',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    './addons/addon-theme/register',
  ],
  stories: ['../src/**/*.stories.*'],
  webpackFinal: async configuration =>
    merge(configuration, {
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'fast-sass-loader',
                options: {
                  includePaths: ['node_modules'],
                },
              },
            ],
            sideEffects: true,
          },
        ],
      },
    }),
};
