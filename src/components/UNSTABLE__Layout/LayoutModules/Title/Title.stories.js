/**
 * @file Title stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { patterns } from '../../../../../.storybook';

import { Title } from '../../../..';

import page from './index.mdx';

const { name } = Title;

export default {
  title: patterns(`Layout Modules/${name}`),
  component: Title,
  args: {
    children: name,
  },
  parameters: { docs: { page } },
};

export const Default = args => <Title {...args} />;
