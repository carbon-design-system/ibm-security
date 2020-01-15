/**
 * @file debugScss.js
 * @description Compiles scss directly with node-sass for debugging purposes.
 */

const path = require('path');
const sass = require('node-sass');

sass.render(
  {
    file: path.resolve(__dirname, '../src', 'index.scss'),
    includePaths: ['node_modules'],
  },
  function debugScss(err) {
    if (err) {
      console.error(err.formatted.replace(/\\n/g, '\n'));
      return;
    }
    console.log('scss compiled ok 👍');
  }
);
