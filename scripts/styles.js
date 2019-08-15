const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssNodeSass = require('postcss-node-sass');
const postcssScss = require('postcss-scss');
const { outputFile, readFile } = require('fs-extra');
const path = require('path');

const srcIndex = path.resolve(__dirname, '../src', 'index.scss');
const distDir = path.resolve(__dirname, '../css');
const distIndex = dir => path.resolve(dir, 'index.css');

readFile(srcIndex, async (err, css) => {
  if (err) throw err;
  const result = await postcss([
    postcssNodeSass({ includePaths: ['node_modules'] }),
    autoprefixer,
  ]).process(css, {
    from: srcIndex,
    to: distIndex(distDir),
    syntax: postcssScss,
  });
  outputFile(distIndex(distDir), result, { encoding: 'utf8' });
});
