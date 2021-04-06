/**
 * @file Module menu stories.
 * @copyright IBM Security 2020 - 2021
 */

import { getDocsParameters } from '../../../../.storybook';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle({ name: 'Overview' }),
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};

export const Default = () => '';
