const autoprefixer = require('autoprefixer');
const { outputFileSync, readFile, readFileSync } = require('fs-extra');
const { sync } = require('glob');
const { resolve } = require('path');

const postcss = require('postcss');
const postcssNodeSass = require('postcss-node-sass');
const postcssScss = require('postcss-scss');

const srcIndex = resolve(__dirname, '../temp', 'components/Button/_index.scss');
const distDir = resolve(__dirname, '../css');
const distIndex = dir => resolve(dir, 'index.css');

const sourceDirectory = 'src';

sync(`${sourceDirectory}/**/*.scss`).forEach(file => {
  let content = readFileSync(file, 'utf8');
  content = content.replace(new RegExp(`@import 'vendor';`, 'g'), '');

  outputFileSync(file.replace(sourceDirectory, 'temp'), content);
});

readFile(srcIndex, async (error, styles) => {
  if (error) {
    throw error;
  }

  try {
    const { css } = await postcss([
      postcssNodeSass({ includePaths: ['node_modules'] }),
      autoprefixer,
    ]).process(styles, {
      from: srcIndex,
      to: distIndex(distDir),
      syntax: postcssScss,
    });

    outputFileSync(distIndex(distDir), css, { encoding: 'utf8' });
  } catch (error) {
    console.error(error);
  }
});
