/**
 * @file webpack configuration.
 * @copyright IBM Security 2019
 */

const { sync } = require('git-branch');
const glob = require('glob');
const { parse } = require('path');

const { BRANCH, CIRCLE_BRANCH } = process.env;

// Pass the branch name from Netlify, CircleCI, or the local branch.
process.env.STORYBOOK_BRANCH = BRANCH || CIRCLE_BRANCH || sync();

const getStories = (path, suffix) =>
  glob.sync(`${path}/**/*${suffix}.*`).map(file => ({
    file,
    name: parse(file).name.replace(suffix, ''),
  }));

process.env.STORYBOOK_STORIES = JSON.stringify(
  [
    ...getStories('node_modules/carbon-components-react/lib', '-story'),
    ...getStories('src', '.stories'),
  ]
    .reduce(
      (accumulator, currentValue) =>
        accumulator.find(({ name }) => name === currentValue.name)
          ? accumulator
          : accumulator.concat([currentValue]),
      []
    )
    .map(({ file }) => file)
);

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
