/**
 * @file Dropdown stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Dropdown, DropdownSkeleton } from '../../';

import { components } from '../../../.storybook';

const items = [
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3',
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
];

const stringItems = ['Option 1', 'Option 2', 'Option 3'];

const types = {
  'Default (default)': 'default',
  'Inline (inline)': 'inline',
};

const props = () => ({
  id: text('Dropdown ID (id)', 'carbon-dropdown-example'),
  type: select('Dropdown type (type)', types, 'default'),
  label: text('Label (label)', 'Dropdown menu options'),
  ariaLabel: text('Aria Label (ariaLabel)', 'Dropdown'),
  disabled: boolean('Disabled (disabled)', false),
  light: boolean('Light variant (light)', false),
  titleText: text('Title (titleText)', 'This is not a dropdown title.'),
  helperText: text('Helper text (helperText)', 'This is not some helper text.'),
  invalid: boolean('Show form validation UI (invalid)', false),
  invalidText: text(
    'Form validation UI content (invalidText)',
    'A valid value is required'
  ),
});

const itemToElement = item => {
  const itemAsArray = item.text.split(' ');
  return (
    <div>
      <span>{itemAsArray[0]}</span>
      <span style={{ color: 'red' }}> {itemAsArray[1]}</span>
    </div>
  );
};

storiesOf(components('Dropdown'), module)
  .add(
    'default',
    () => (
      <div style={{ width: 300 }}>
        <Dropdown
          {...props()}
          items={items}
          itemToString={item => (item ? item.text : '')}
          onChange={action('onChange')}
        />
      </div>
    ),
    {
      info: {
        text: 'Dropdown',
      },
    }
  )
  .add(
    'items as strings',
    () => (
      <div style={{ width: 300 }}>
        <Dropdown
          {...props()}
          items={stringItems}
          onChange={action('onChange')}
        />
      </div>
    ),
    {
      info: {
        text: 'Rendering an array of strings as `items`',
      },
    }
  )
  .add(
    'items as components',
    () => (
      <div style={{ width: 300 }}>
        <Dropdown
          {...props()}
          items={items}
          itemToString={item => (item ? item.text : '')}
          itemToElement={itemToElement}
          onChange={action('onChange')}
        />
      </div>
    ),
    {
      info: {
        text: `Rendering items as custom components`,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div style={{ width: 300 }}>
        <DropdownSkeleton />
        &nbsp;
        <DropdownSkeleton inline />
      </div>
    ),
    {
      info: {
        text: `
            Placeholder skeleton state to use when content is loading.
          `,
      },
    }
  );
