/**
 * @file Server-side rendering test - Ensures framework can be loaded in Node.js.
 * @copyright IBM Security 2019 - 2021
 */

// This test is not run by Jest because Jest's pollyfills mask errors.
require('assert')(require('../../lib'));

console.log('PASS - Server-side rendering test');
