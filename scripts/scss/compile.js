/**
 * @file SCSS compilation helpers.
 * @copyright IBM Security 2020 - 2021
 */

const { renderSync } = require('node-sass');
const { resolve } = require('path');

const root = resolve(__dirname, '../..');

module.exports = file =>
  renderSync({
    file: resolve(root, file),
    includePaths: [resolve(root, 'node_modules')],
    outputStyle: 'expanded',
  });
