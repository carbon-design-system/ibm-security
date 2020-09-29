/**
 * @file Story information.
 * @copyright IBM Security 2019 - 2020
 */

import { patterns } from '../../../../.storybook';

export const getDocsParameters = page => ({
  docs: { page },
  info: {
    disable: true,
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
});

export default ({ displayName, name }) =>
  patterns(`UNSTABLE Layout Modules/${displayName || name}`);
