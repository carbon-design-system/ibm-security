/**
 * @copyright IBM Corp. 2016 - 2020
 * @license Apache-2.0
 */

import { run } from 'axe-core';

// https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
const defaultOptions = {
  rules: {
    'document-title': {
      enabled: false,
    },

    'html-has-lang': {
      enabled: false,
    },

    'landmark-one-main': {
      enabled: false,
    },

    'page-has-heading-one': {
      enabled: false,
    },

    region: {
      enabled: false,
    },
  },
};

const lineBreak = '\n';

function formatOutput(violations) {
  const { description, help, helpUrl, id, impact, nodes } = violations[0];

  const formattedNodes = nodes
    .map(({ failureSummary, html }) =>
      ['Node:', html, lineBreak, ...failureSummary.split(lineBreak)].join(
        lineBreak
      )
    )
    .join(lineBreak);

  return `Rule violation: #${id} [${impact}]
> ${description}
${help}
${helpUrl}
${'='.repeat(80)}
${formattedNodes}`;
}

export default function(node, options = {}) {
  return new Promise(resolve => {
    run(
      node,
      {
        ...defaultOptions,
        ...options,
      },
      (error, { violations }) => {
        if (error) {
          throw error;
        }

        resolve({
          message: () => formatOutput(violations),
          pass: !violations.length > 0,
        });
      }
    );
  });
}
