/**
 * @file Delimited list stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { array, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { settings } from 'carbon-components';
import React from 'react';

import { components } from '../../../.storybook';

import { DelimitedList } from '../..';

import props from './_mocks_';

const { delimiter, truncate } = DelimitedList.defaultProps;

const storyProps = () => ({
  items: array('Items (`items`)', props.items),
  delimiter: text('Delimiter (`delimiter`)', delimiter),
  truncate: boolean('Truncate (`truncate`)', truncate),
});

storiesOf(components('DelimitedList'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add(
    'Default',
    () => (
      <DelimitedList
        className={`${settings.prefix}--col-sm-2`}
        {...storyProps()}
      />
    ),
    {
      info:
        'The `DelimitedList` component truncates an array of items, separated by a delimiter, and includes the total number of items when hovering',
    }
  );
