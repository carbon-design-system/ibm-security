/**
 * @file Delimited list stories.
 * @copyright IBM Security 2019
 */

import { array, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { settings } from 'carbon-components';
import React from 'react';

import { components, info } from '../../../.storybook';

import { DelimitedList } from '../..';

import mocks from './_mocks_';

const { delimiter, truncate } = DelimitedList.defaultProps;

const props = () => ({
  items: array('Items (items)', mocks.items),
  truncate: boolean('Truncate (truncate)', truncate),
  delimiter: text('Delimiter (delimiter)', delimiter),
});

storiesOf(components('DelimitedList'), module).add(
  'Default',
  () => (
    <DelimitedList className={`${settings.prefix}--col-sm-2`} {...props()} />
  ),
  info(
    'Delimited lists truncates an array of items, separated by a delimited, and include the total number of items when hovering.'
  )
);
