/**
 * @file Select stories.
 * @copyright IBM Security 2018 - 2021
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { carbon } from '../../../.storybook';

import { Select, SelectItem, SelectItemGroup, SelectSkeleton } from '../../';

const props = {
  select: () => ({
    className: 'some-class',
    light: boolean('Light variant (light in <Select>)', false),
    inline: boolean(
      'Put control in-line with label (inline in <Select>)',
      false
    ),
    disabled: boolean('Disabled (disabled in <Select>)', false),
    hideLabel: boolean('No label (hideLabel in <Select>)', false),
    invalid: boolean('Show form validation UI (invalid in <Select>)', false),
    invalidText: text(
      'Form validation UI content (invalidText in <Select>)',
      'A valid value is required'
    ),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    onChange: action('onChange'),
  }),
  group: () => ({
    disabled: boolean('Disabled (disabled in <SelectItemGroup>)', false),
  }),
};

storiesOf(carbon('Select'), module)
  .add(
    'Default',
    () => {
      const groupProps = props.group();
      return (
        <Select
          {...props.select()}
          id="select-1"
          defaultValue="placeholder-item"
        >
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Choose an option"
          />
          <SelectItemGroup label="Category 1" {...groupProps}>
            <SelectItem value="option-1" text="Option 1" />
            <SelectItem value="option-2" text="Option 2" />
          </SelectItemGroup>
          <SelectItemGroup label="Category 2" {...groupProps}>
            <SelectItem value="option-3" text="Option 3" />
            <SelectItem value="option-4" text="Option 4" />
          </SelectItemGroup>
        </Select>
      );
    },
    {
      info: {
        text: `
            Select displays a list below its title when selected. They are used primarily in forms,
            where a user chooses one option from a list. Once the user selects an item, the dropdown will
            disappear and the field will reflect the user's choice. Create Select Item components for each
            option in the list. The example below shows an enabled Select component with three items.
          `,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div style={{ width: '300px' }}>
        <SelectSkeleton />
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
