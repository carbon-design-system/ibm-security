/**
 * @file Styles.
 * @copyright IBM Security 2019 - 2021
 */

const autoprefixer = require('autoprefixer');
const { outputFileSync, readFile, readFileSync } = require('fs-extra');
const { sync } = require('glob');
const { resolve } = require('path');

const postcss = require('postcss');
const postcssNodeSass = require('postcss-node-sass');
const postcssScss = require('postcss-scss');

const root = resolve(__dirname, '..');

const src = resolve(root, 'src');
const tmp = 'tmp';

sync(resolve(src, '**', '*.scss')).forEach(file =>
  outputFileSync(
    file.replace(src, tmp),
    readFileSync(file, 'utf8').replace(
      new RegExp(`.*carbon-components/scss/components.*\n`, 'g'),
      ''
    )
  )
);

const from = resolve(root, tmp, 'index.scss');

readFile(from, async (error, styles) => {
  if (error) {
    throw error;
  }

  try {
    const to = resolve(root, 'css', 'index.css');

    const { css } = await postcss([
      postcssNodeSass({ includePaths: ['node_modules'] }),
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
