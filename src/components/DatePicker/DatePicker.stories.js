/**
 * @file Date picker stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action, decorateAction } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { DatePicker, DatePickerInput, DatePickerSkeleton } from '.';

import { components } from '../../../.storybook';

// Datepickers last argument contains an instance of flatpickr
// and will cause action logger to enter an infinite loop. Just don't log that argument
const datePickerOnChangeActions = decorateAction([
  args => args.slice(0, args.length - 2),
]);

const patterns = {
  'Short (d{1,2}/d{4})': 'd{1,2}/d{4}',
  'Regular (d{1,2}/d{1,2}/d{4})': 'd{1,2}/d{1,2}/d{4}',
};

const props = {
  datePicker: () => ({
    id: 'date-picker',
    light: boolean('Light variant (light in <DatePicker>)', false),
    onChange: datePickerOnChangeActions('onPickerChange'),
  }),
  datePickerInput: () => ({
    id: 'date-picker-input-id',
    className: 'some-class',
    labelText: text(
      'Label text (labelText in <DatePickerInput>)',
      'Date Picker label'
    ),
    pattern: select(
      'The date format (pattern in <DatePickerInput>)',
      patterns,
      'd{1,2}/d{4}'
    ),
    placeholder: text(
      'Placeholder text (placeholder in <DatePickerInput>)',
      'mm/dd/yyyy'
    ),
    disabled: boolean('Disabled (disabled in <DatePickerInput>)', false),
    invalid: boolean(
      'Show form validation UI (invalid in <DatePickerInput>)',
      false
    ),
    invalidText: text(
      'Form validation UI content (invalidText in <DatePickerInput>)',
      'A valid value is required'
    ),
    iconDescription: text(
      'Icon description (iconDescription in <DatePickerInput>)',
      'Icon description'
    ),
    onClick: action('onClick'),
    onChange: action('onInputChange'),
  }),
};

storiesOf(components('DatePicker'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add(
    'simple',
    () => (
      <DatePicker
        {...props.datePicker()}
        short={boolean('Use shorter width (short in <DatePicker>)', false)}
        datePickerType="simple"
      >
        <DatePickerInput {...props.datePickerInput()} />
      </DatePicker>
    ),
    {
      info: {
        text:
          'A simple Date Picker consists of an input field and no calendar.',
      },
    }
  )
  .add('single with calendar', () => (
    <DatePicker
      {...props.datePicker()}
      datePickerType="range"
      dateFormat={text('The date format (dateFormat in <DatePicker>)', 'm/d/Y')}
      iconDescription={text(
        'Icon description (iconDescription in <DatePicker>)',
        'Icon description'
      )}
    >
      <DatePickerInput
        {...props.datePickerInput()}
        id="date-picker-input-id-start"
      />
      <DatePickerInput
        {...props.datePickerInput()}
        id="date-picker-input-id-end"
      />
    </DatePicker>
  ))
  .add(
    'range with calendar',
    () => {
      const datePickerInputProps = props.datePickerInput();
      return (
        <DatePicker
          {...props.datePicker()}
          datePickerType="range"
          dateFormat={text(
            'The date format (dateFormat in <DatePicker>)',
            'm/d/Y'
          )}
        >
          <DatePickerInput
            {...datePickerInputProps}
            id="date-picker-input-id-start"
          />
          <DatePickerInput
            {...datePickerInputProps}
            id="date-picker-input-id-end"
          />
        </DatePicker>
      );
    },
    {
      info: {
        text: `
            A range Date Picker consists of two input fields and a calendar.
          `,
      },
    }
  )
  .add(
    'range with calendar and min/max dates',
    () => {
      const datePickerInputProps = props.datePickerInput();
      return (
        <DatePicker
          {...props.datePicker()}
          minDate="1/10/2020"
          maxDate="1/20/2020"
          datePickerType="range"
          dateFormat="m/d/Y"
        >
          <DatePickerInput
            {...datePickerInputProps}
            id="date-picker-input-id"
          />
          <DatePickerInput
            {...datePickerInputProps}
            id="date-picker-input-id-2"
          />
        </DatePicker>
      );
    },
    {
      info: {
        text: `
            A range Date Picker consists of two input fields and a calendar, and optionally, the minDate and maxDate fields.
          `,
      },
    }
  )
  .add('skeleton', () => <DatePickerSkeleton range />, {
    info: {
      text: `
            Placeholder skeleton state to use when content is loading.
            `,
    },
  });
