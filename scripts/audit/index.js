/**
 * @file Audit.
 * @copyright IBM Security 2020 - 2021
 */

const { exec, exit } = require('shelljs'); // https://www.npmjs.com/package/shelljs
const { inspect } = require('util');

exec(
  'yarn audit --groups dependencies --level moderate --json', // https://classic.yarnpkg.com/en/docs/cli/audit
  { silent: true },
  (code, stdout) => {
    const auditAdvisories = stdout
      .split('\n')
      .filter(Boolean)
      .map(JSON.parse)
      .filter(({ type }) => type === 'auditAdvisory');

    if (auditAdvisories.length) {
      console.log(inspect(auditAdvisories, { colors: true, depth: null }));
    }

    exit();
  }
);
