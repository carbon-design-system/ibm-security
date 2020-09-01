/**
 * @file Title stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { Title } from '../../../..';
import { getTitle } from '../../stories';

import page from './index.mdx';

export default {
  title: getTitle(Title),
  component: Title,
  args: {
    children: 'Section title',
  },
  parameters: { docs: { page } },
};

export const Default = args => <Title {...args} />;
