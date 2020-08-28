/**
 * @file Time indicator stories.
 * @copyright IBM Security 2019 - 2020
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components } from '../../../.storybook';

import { TimeIndicator } from '../..';

const props = () => ({
  children: text('Children (children)', '10 minute setup'),
});

export const Default = () => <TimeIndicator {...props()} />;

export default {
  title: components('TimeIndicator'),
  component: TimeIndicator,
};
