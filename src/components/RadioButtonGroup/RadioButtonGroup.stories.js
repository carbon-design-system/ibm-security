/**
 * @file Radio button group stories.
 * @copyright IBM Security 2019 - 2021
 */

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import React from 'react';

import FormGroup from 'carbon-components-react/lib/components/FormGroup';

import { carbon } from '../../../.storybook';

import { RadioButton, RadioButtonGroup } from '../../';

const values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled',
};

const props = {
  group: () => ({
    name: text(
      'The form control name (name in <RadioButtonGroup>)',
      'radio-button-group'
    ),
    valueSelected: select(
      'Value of the selected button (valueSelected in <RadioButtonGroup>)',
      values,
      'default-selected'
    ),
    onChange: action('onChange'),
  }),
  radio: () => ({
    className: 'some-class',
    disabled: boolean('Disabled (disabled in <RadioButton>)', false),
    labelText: text(
      'Label text (labelText in <RadioButton>)',
      'Radio button label'
    ),
  }),
};

storiesOf(carbon('RadioButtonGroup'), module).add(
  'Default',
  () => {
    const radioProps = props.radio();
    return (
      <FormGroup legendText="Radio Button heading">
        <RadioButtonGroup
          defaultSelected="default-selected"
          legend="Group Legend"
          {...props.group()}
        >
          <RadioButton value="standard" id="radio-1" {...radioProps} />
          <RadioButton value="default-selected" id="radio-2" {...radioProps} />
          <RadioButton value="disabled" id="radio-3" {...radioProps} />
        </RadioButtonGroup>
      </FormGroup>
    );
  },
  {
    info: {
      text: `
            The example below shows a Radio Button Group component with a default selected Radio Button.
            Although you can set the checked prop on the Radio Button, when using the Radio Button component
            as a child of the Radio Button Group, either set the defaultSelected or valueSelected which will
            automatically set the selected prop on the corresponding Radio Button component.
    
            Use defaultSelected when you want a radio button to be selected initially, but don't need to set it
            at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.
          `,
    },
  }
);
