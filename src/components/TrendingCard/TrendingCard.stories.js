/**
 * @file Trending card stories.
 * @copyright IBM Security 2019 - 2020
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';
import { TrendingCard } from '../..';

export default {
  title: components('TrendingCard'),
  component: TrendingCard,
  args: {
    title: 'Title',
    href: '#',
    subtitle: 'Subtitle',
  },
  parameters: {
    ...getDocsParameters(),
  },
};

export const Default = args => <TrendingCard {...args} />;
