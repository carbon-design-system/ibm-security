/**
 * @file Important content area mocks.
 * @copyright IBM Security 2019
 */

import React from 'react';

const value = 10;

import Tooltip from '../../Tooltip';

export default {
  label: 'Label',
  editTooltip: 'this is a tooltip for the edit icon',
  value,
  total: value * value,
  information: (
    <Tooltip showIcon={true} direction={'top'}>
      {'This is an optional label tooltip'}
    </Tooltip>
  ),
};
