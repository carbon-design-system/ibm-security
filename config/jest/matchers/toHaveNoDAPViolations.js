/**
 * Copyright IBM Corp. 2019-2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

let aChecker;

async function toHaveNoDAPViolations(node, label) {
  if (!aChecker) {
    aChecker = require('accessibility-checker');
  }

  const results = await aChecker.getCompliance(node, label);
  if (aChecker.assertCompliance(results.report) === 0) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () => aChecker.stringifyResults(results.report),
  };
}

module.exports = toHaveNoDAPViolations;
