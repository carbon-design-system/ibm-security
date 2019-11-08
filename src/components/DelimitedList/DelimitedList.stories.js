/**
 * @file Delimited list stories.
 * @copyright IBM Security 2019
 */

import { breakpoints } from '@carbon/layout';
import { array, boolean, text } from '@storybook/addon-knobs';
import React from 'react';

import { components, meta } from '../../../.storybook';

import { DelimitedList } from '../..';

import mocks from './_mocks_';

const { delimiter, truncate } = DelimitedList.defaultProps;

const props = () => ({
  items: array('Items (items)', mocks.items),
  truncate: boolean('Truncate (truncate)', truncate),
  delimiter: text('Delimiter (delimiter)', delimiter),
  style: { width: breakpoints.sm.width },
});

export const Default = () => <DelimitedList {...props()} />;

export default meta(
  components('DelimitedList'),
  'Delimited lists truncates an array of items, separated by a delimiter, and include the total number of items when hovering.'
);
