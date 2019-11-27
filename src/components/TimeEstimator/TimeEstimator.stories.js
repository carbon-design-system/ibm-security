/**
 * @file Time estimator stories.
 * @copyright IBM Security 2019
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';

import { TimeEstimator } from '../..';

const props = () => ({
  children: text('Children (children)', '10 min setup'),
});

export const Default = () => <TimeEstimator {...props()} />;

export default meta(components('TimeEstimator'));
