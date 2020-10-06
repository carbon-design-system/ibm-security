/**
 * @file Time indicator stories.
 * @copyright IBM Security 2019 - 2020
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';
import { TimeIndicator } from '../..';

export default {
  title: components('TimeIndicator'),
  component: TimeIndicator,
  args: {
    children: '10 minute setup',
  },
  parameters: {
    ...getDocsParameters(),
  },
};

export const Default = args => <TimeIndicator {...args} />;
