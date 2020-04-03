/**
 * @file SCSS import debugging and verification.
 * @copyright IBM Security 2020
 */

const { bgGreen, bgRed, red } = require('colors');
const { sync } = require('glob');
const { render } = require('node-sass');

sync('src/**/*.scss').forEach(file =>
  render(
    {
      file,
      includePaths: ['node_modules'],
    },

    error => {
      console.log(`${error ? bgRed('FAIL') : bgGreen('PASS')} ${file}`);

      if (error) {
        console.error(`\n${red(error.formatted)}`);
      }
    }
  )
);
