/**
 * @copyright IBM Corp. 2019 - 2020
 * @license Apache-2.0
 */

import { assertCompliance, getCompliance, stringifyResults } from '@ibma/aat';

export default async function(node, label) {
  const { report } = await getCompliance(node, label);

  return {
    message: () => stringifyResults(report),
    pass: assertCompliance(report) === 0,
  };
}
