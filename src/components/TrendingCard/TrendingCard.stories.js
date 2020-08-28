/**
 * @file Trending card stories.
 * @copyright IBM Security 2019 - 2020
 */

import { breakpoints } from '@carbon/layout';

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components } from '../../../.storybook';

import { TrendingCard } from '../..';

const props = () => ({
  title: text('Title (title)', 'Title'),
  href: text('Link (href)', '#'),
  subtitle: text('Subtitle (subtitle)', 'Subtitle'),
  style: { width: breakpoints.sm.width },
});

export const Default = ({ element }) => (
  <TrendingCard {...props()} element={element} />
);

export default {
  title: components('TrendingCard'),
  component: TrendingCard,
};
