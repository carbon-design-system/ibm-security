/**
 * @file Upsell nudge stories.
 * @copyright IBM Security 2020
 */
import { App24 } from '@carbon/icons-react';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';

import { UpsellNudge } from '../..';

const props = () => ({
  title: text(
    'Title (title)',
    'See threat activity related to this report and discover threats affecting your environment'
  ),
  children: text('Children (children)', 'IBM Threat Intelligence Insights'),
  renderIcon: App24,
  button: {
    children: text('Button children (button.children)', 'View in Catalog'),
  },
});

export const Default = () => <UpsellNudge {...props()} />;

export default meta(
  components('UpsellNudge'),
  'Upsell nudges are in-context cards that enables pivoting to purchase or upgrades.'
);
