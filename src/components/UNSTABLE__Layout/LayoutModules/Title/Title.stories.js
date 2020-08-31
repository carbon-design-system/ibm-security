/**
 * @file Button cluster stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { patterns } from '../../../../../.storybook';

import { Title } from '../../../..';

import page from './Title.mdx';

const { name } = Title;

export const Default = args => <Title {...args} />;

export default {
  title: patterns(`Layout Modules/${name}`),
  component: Title,
  args: {
    children: name,
  },
  parameters: { docs: { page } },
};
