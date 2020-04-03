/**
 * @file SCSS import debugging and verification.
 * @copyright IBM Security 2020
 */

const { bgGreen, bgRed, red } = require('colors');
const { sync } = require('glob');
const { render } = require('node-sass');

sync(process.argv[2]).forEach(file =>
  render(
    {
      file,
      includePaths: ['node_modules'],
    },

    error => {
      console.log(`${error ? bgRed('FAIL') : bgGreen('PASS')} ${file}`);

      if (error) {
        console.log(`\n${red(error.formatted)}`);
      }
    }
  )
);
