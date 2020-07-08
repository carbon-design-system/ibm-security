/**
 * @file Upsell nudge stories.
 * @copyright IBM Security 2020
 */

import { breakpoints } from '@carbon/layout';

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';

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

export default meta(
  components('UpsellNudge'),
  'Trending cards provide summary information of trending items with the ability to navigate to the details.'
);
