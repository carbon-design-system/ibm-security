/**
 * @file Time indicator stories.
 * @copyright IBM Security 2019
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';

import { TimeIndicator } from '../..';

const props = () => ({
  children: text('Children (children)', '10 minute setup'),
});

export const Default = () => <TimeIndicator {...props()} />;

export default meta(
  components('TimeIndicator'),
  'Time indicators display an estimated amount of time it takes to complete a flow. If there is unavailable space to accommodate the text, `minute` should be abbreviated to `min`.'
);
