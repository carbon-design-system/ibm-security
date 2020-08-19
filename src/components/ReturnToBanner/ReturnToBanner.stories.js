/**
 * @file 'Return to banner' stories.
 * @copyright IBM Security 2020
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';
import { ReturnToBanner } from '../..';

const props = () => ({
  children: text('Children (href)', 'Application'),
  href: text('Link (href)', '#'),
  labelText: text('Label (labelText)', 'Return to'),
  view: text('View (view)', 'View'),
});

export const Default = () => <ReturnToBanner {...props()} />;

export default meta(
  components('ReturnToBanner'),
  "The 'Return to' banner is a form of navigation for pivoting from within one application to another."
);
