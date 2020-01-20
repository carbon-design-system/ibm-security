/**
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AAT from '@ibma/aat';

async function toHaveNoDAPViolations(node, label) {
  const results = await AAT.getCompliance(node, label);
  if (AAT.assertCompliance(results.report) === 0) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () => AAT.stringifyResults(results.report),
  };
}

module.exports = toHaveNoDAPViolations;
