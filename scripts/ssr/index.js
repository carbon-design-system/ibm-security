/**
 * @file Server-side rendering test - Ensures library can be loaded in Node.js.
 * @copyright IBM Security 2018
 */

// This test is not run by Jest because Jest's pollyfills mask errors.
/* eslint-disable import/no-unresolved */
require('assert')(require('../../lib'));

console.log('PASS - Server-side rendering test');
