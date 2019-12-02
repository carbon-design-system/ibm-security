/**
 * @file Trending card stories.
 * @copyright IBM Security 2019
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';

import { TrendingCard } from '../..';

const props = () => ({
  title: text('Title (title)', 'Title'),
  href: text('Link (href)', '#'),
  subtitle: text('Subtitle (subtitle)', 'Subtitle'),
});

export const Default = ({ element }) => (
  <TrendingCard {...props()} element={element} />
);

export default meta(components('TrendingCard'));
