/**
 * @file SCSS compilation helpers.
 * @copyright IBM Security 2020
 */

const { sync } = require('glob');
const { renderSync } = require('node-sass');

module.exports = {
  compile: file =>
    renderSync({
      file,
      includePaths: ['node_modules'],
      outputStyle: 'expanded',
    }),
  forEachImport: callback =>
    sync('src/**/*.scss', {
      ignore: ['src/globals/grid/css-gridish/**/*'],
    }).forEach(callback),
};
