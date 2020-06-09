/**
 * @file SCSS import debugging and verification.
 * @copyright IBM Security 2020
 */

const { bgGreen, bgRed, red } = require('colors');

const { compile, forEachImport } = require('./compile');

forEachImport(file => {
  let status;

  try {
    compile(file);
  } catch (error) {
    status = error;
  } finally {
    console.log(`${status ? bgRed('FAIL') : bgGreen('PASS')} ${file}`);

    if (status) {
      console.error(`\n${red(status.formatted)}`);
    }
  }
});
