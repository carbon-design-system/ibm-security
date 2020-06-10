/**
 * @file webpack configuration.
 * @copyright IBM Security 2019
 */

const { sync } = require('git-branch');
const glob = require('glob');
const { basename, dirname, extname, parse, resolve } = require('path');

const { BRANCH, CIRCLE_BRANCH } = process.env;

// Pass the branch name from Netlify, CircleCI, or the local branch.
process.env.STORYBOOK_BRANCH = BRANCH || CIRCLE_BRANCH || sync();

/**
 * Construct an array of available stories returning the name and path.
 * @param {string} path The path to search for stories in.
 * @param {string} suffix The story suffix to use.
 * @returns {Array.<Object.<string, string>>} An array of objects containing the story name and it's path.
 */
const getStories = (path, suffix) =>
  glob.sync(resolve(__dirname, '..', `${path}/**/*${suffix}.*`)).map(path => ({
    name: parse(path).name.replace(suffix, ''),
    path,
  }));

// Internal stories.
const stories = getStories('src', '.stories');

// Dependency suffix.
const suffix = '-story';

// Pass the array of filtered stories as an environment variable to Storybook environment as a string - https://storybook.js.org/docs/configurations/env-vars
process.env.STORYBOOK_STORIES = JSON.stringify(
  // Stories from dependencies.
  getStories('node_modules/carbon-components-react/lib/components', suffix)
    .filter(
      ({ name }) =>
        // Filter out stories from dependencies that already have examples in `@carbon/ibm-security`.
        !stories.find(story => story.name === name)
    )

    // Filter out and format the path for any stories that can be displayed, excluding any that are missing resources from dependencies, for example - https://github.com/carbon-design-system/carbon/blob/master/packages/react/src/components/Grid/Grid-story.js#L1
    .map(({ path }) => {
      try {
        const { dir, name } = parse(path);

        return (
          require(path) && {
            name: name.replace(suffix, ''),
            path: basename(dir),
          }
        );
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
