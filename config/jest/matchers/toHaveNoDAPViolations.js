/**
 * Copyright IBM Corp. 2019-2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

let aChecker;

async function toHaveNoDAPViolations(node, label) {
  // We defer initialization of AAT as it seems to have a race condition if
  // we are running a test suite in node instead of jsdom. As a result, we only
  // initialize it if this matcher is called
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

export default toHaveNoDAPViolations;
