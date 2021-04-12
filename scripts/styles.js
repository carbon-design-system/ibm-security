/**
 * @file Styles.
 * @copyright IBM Security 2020 - 2021
 */

const postcssSass = require('@csstools/postcss-sass');

const autoprefixer = require('autoprefixer');
const { outputFile, readFile } = require('fs-extra');
const path = require('path');
const postcss = require('postcss');
const postcssScss = require('postcss-scss');

const srcIndex = path.resolve(__dirname, '../src', 'index.scss');
const distDir = path.resolve(__dirname, '../css');
const distIndex = dir => path.resolve(dir, 'index.css');

readFile(srcIndex, async (err, css) => {
  if (err) throw err;
  try {
    const result = await postcss([
      postcssSass({ includePaths: ['node_modules'] }),
      autoprefixer,
    ]).process(css, {
      from: srcIndex,
      syntax: postcssScss,
      to: distIndex(distDir),
    });
    outputFile(distIndex(distDir), result, { encoding: 'utf8' });
  } catch (error) {
    console.error(error);
  }
});
