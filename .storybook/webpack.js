/**
 * @file webpack configuration.
 * @copyright IBM Security 2019
 */

const { sync } = require('git-branch');
const glob = require('glob');
const { parse, resolve } = require('path');

const { BRANCH, CIRCLE_BRANCH } = process.env;

// Pass the branch name from Netlify, CircleCI, or the local branch.
process.env.STORYBOOK_BRANCH = BRANCH || CIRCLE_BRANCH || sync();

// Construct an array of stories returning the name and path.
const getStories = (path, suffix) =>
  glob.sync(`${path}/**/*${suffix}.*`).map(path => ({
    name: parse(path).name.replace(suffix, ''),
    path,
  }));

// Pass the array of filtered stories as an environment variable to Storybook environment as a string - https://storybook.js.org/docs/configurations/env-vars
process.env.STORYBOOK_STORIES = JSON.stringify(
  getStories('node_modules/carbon-components-react/lib', '-story')
    .filter(
      ({ name }) =>
        // Filter out stories from dependencies that already have examples in `@carbon/ibm-security`.
        !getStories('src', '.stories').find(story => story.name === name)
    )

    // Filter out any stories that can't be displayed due to missing resources from dependencies, for example - https://github.com/carbon-design-system/carbon/blob/master/packages/react/src/components/Grid/Grid-story.js#L1
    .map(({ path }) => {
      try {
        return require(resolve(__dirname, '..', path)) && path;
      } catch {}
    })
    .filter(Boolean)
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
