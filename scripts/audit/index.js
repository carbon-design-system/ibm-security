/**
 * @file Audit.
 * @copyright IBM Security 2020
 */

const { exec, exit } = require('shelljs'); // https://www.npmjs.com/package/shelljs
const { inspect } = require('util');

exec(
  'yarn audit --groups dependencies --level moderate --json',
  { silent: true },
  (code, stdout) => {
    const auditAdvisories = stdout
      .split('\n')
      .filter(Boolean)
      .map(JSON.parse)
      .filter(({ type }) => type === 'auditAdvisory');

    const { length: hasAuditAdvisories } = auditAdvisories;

    if (hasAuditAdvisories) {
      console.log(inspect(auditAdvisories, { colors: true, depth: null }));
    }

    exit(hasAuditAdvisories);
  }
);
