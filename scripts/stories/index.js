/**
 * @file Story generation.
 * @copyright IBM Security 2020
 */

const { readFileSync, writeFileSync } = require('fs');
const { sync } = require('glob');
const { compile } = require('handlebars');
const { basename, parse, resolve } = require('path');

// The year to use for copyright information.
const year = new Date().getFullYear();

// Internal directory.
const internalDirectory = 'src/components';

// Generated stories directory.
const storiesDirectory = `${internalDirectory}/stories`;

/**
 * Construct an array of available stories returning the name and path.
 * @param {string} path The path to search for stories in.
 * @param {string} suffix The story suffix to use.
 * @returns {Array.<Object.<string, string>>} An array of objects containing the story name and it's path.
 */
const getStories = (path, suffix) =>
  sync(resolve(__dirname, '..', '..', path, '**', `*${suffix}.*`), {
    ignore: `**/${storiesDirectory}/*`,
  }).map(path => ({
    name: parse(path).name.replace(suffix, ''),
    path,
  }));

// Internal suffix.
const internalSuffix = '.stories';

// Internal stories.
const internalStories = getStories(internalDirectory, internalSuffix);

// Stories from dependencies.
getStories('node_modules/carbon-components-react/lib/components', '-story')
  .filter(
    ({ name }) =>
      // Filter out stories from dependencies that already have examples in `@carbon/ibm-security`.

      !internalStories.find(story => story.name === name)
  )

  // Create any stories that can be displayed and exclude any that are missing resources from dependencies, for example - https://github.com/carbon-design-system/carbon/blob/master/packages/react/src/components/Grid/Grid-story.js#L1
  .forEach(({ name, path }) => {
    try {
      const { dir, name: story } = parse(path);

      // Catch execution if the story can't be imported.
      require(path);

      writeFileSync(
        `${storiesDirectory}/${name}${internalSuffix}.js`,
        compile(
          readFileSync(resolve(__dirname, 'templates', 'index.hbs'), 'utf8')
        )({
          name,
          path: basename(dir),
          story,
          year,
        })
      );
    } catch {}
  });
