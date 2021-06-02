/**
 * @file Styles.
 * @copyright IBM Security 2019 - 2021
 */

const postcssSass = require('@csstools/postcss-sass');
const autoprefixer = require('autoprefixer');
const { outputFileSync, readFile, readFileSync } = require('fs-extra');
const { sync } = require('glob');
const { resolve } = require('path');

const postcss = require('postcss');
const postcssScss = require('postcss-scss');

const root = resolve(__dirname, '..');

const src = resolve(root, 'src');
const tmp = 'tmp';

sync(resolve(src, '**', '*.scss')).forEach(file => {
  outputFileSync(
    file.replace(src, tmp),
    ['carbon-components/scss/components'].reduce(
      (accumulator, expression) =>
        accumulator.replace(new RegExp(`.*${expression}.*\n`, 'g'), ''),
      readFileSync(file, 'utf8')
    )
  );
});

const from = resolve(root, tmp, 'globals', 'build', 'index.scss');

readFile(from, async (error, styles) => {
  if (error) {
    throw error;
  }

  try {
    const to = resolve(root, 'css', 'index.css');

    const { css } = await postcss([
      postcssSass({ includePaths: ['node_modules'] }),
      autoprefixer,
    ]).process(styles, {
      from,
      to,
      syntax: postcssScss,
    });

    outputFileSync(to, css);
  } catch (error) {
    console.error(error);
  }
});
