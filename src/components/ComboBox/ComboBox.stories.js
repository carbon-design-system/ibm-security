/**
 * @file Combo box stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import WithState from 'carbon-components-react/es/tools/withState';
import ComboBox from '../ComboBox';

import { components } from '../../../.storybook';

const items = [
  {
    id: 'option-0',
    text: 'Option 1',
  },
  {
    id: 'option-1',
    text: 'Option 2',
  },
  {
    id: 'option-2',
    text: 'Option 3',
    selected: true,
  },
  {
    id: 'option-3',
    text: 'Option 4',
  },
  {
    id: 'option-4',
    text:
      'An example option that is really long to show what should be done to handle long text',
  },
];

const props = () => ({
  id: text('Combobox ID (id)', 'carbon-combobox-example'),
  placeholder: text('Placeholder text (placeholder)', 'Filter...'),
  titleText: text('Title (titleText)', 'Combobox title'),
  helperText: text('Helper text (helperText)', 'Optional helper text here'),
  light: boolean('Light (light)', false),
  disabled: boolean('Disabled (disabled)', false),
  invalid: boolean('Invalid (invalid)', false),
  invalidText: text('Invalid text (invalidText)', 'A valid value is required'),
  onChange: action('onChange'),
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

storiesOf(components('ComboBox'), module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add(
    'Default',
    () => (
      <div style={{ width: 300 }}>
        <ComboBox
          items={items}
          itemToString={item => (item ? item.text : '')}
          {...props()}
        />
      </div>
    ),
    {
      info: {
        text: 'ComboBox',
      },
    }
  )
  .add(
    'items as components',
    () => (
      <div style={{ width: 300 }}>
        <ComboBox
          items={items}
          itemToString={item => (item ? item.text : '')}
          itemToElement={itemToElement}
          {...props()}
        />
      </div>
    ),
    {
      info: {
        text: 'ComboBox',
      },
    }
  )
  .add(
    'custom text input handling',
    () => (
      <WithState initialState={{ inputText: '' }}>
        {({ state, setState }) => (
          <div style={{ width: 300 }}>
            <ComboBox
              items={items}
              itemToString={item =>
                item ? `${item.text} queried with ${state.inputText}` : ''
              }
              shouldFilterItem={() => true}
              onInputChange={text => setState({ inputText: text })}
              {...props()}
            />
          </div>
        )}
      </WithState>
    ),
    {
      info: {
        text: `Sometimes you want to perform an async action to trigger a backend call on input change.`,
      },
    }
  );
