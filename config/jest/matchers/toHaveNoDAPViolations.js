/**
 * Copyright IBM Corp. 2019-2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import aChecker from 'accessibility-checker';

async function toHaveNoDAPViolations(node, label) {
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
