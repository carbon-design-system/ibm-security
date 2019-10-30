/**
 * @file Toggle small stories.
 * @copyright IBM Security 2018
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { components } from '../../../.storybook';

import { ToggleSmall, ToggleSmallSkeleton } from '../..';

const toggleProps = () => ({
  className: 'some-class',
  ariaLabel: text('ARIA label (ariaLabel)', 'Label Name'),
  disabled: boolean('Disabled (disabled)', false),
  onChange: action('onChange'),
  onToggle: action('onToggle'),
});

storiesOf(components('ToggleSmall'), module)
  .add(
    'toggled',
    () => (
      <ToggleSmall
        defaultToggled
        {...toggleProps()}
        className="some-class"
        id="toggle-1"
      />
    ),
    {
      info: {
        text: `
            Toggles are controls that are used to quickly switch between two possible states. The example below shows
            an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.
            Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled
            prop will only set the value initially. This example has defaultToggled set to true. Small toggles may be used
            when there is not enough space for a regular sized toggle. This issue is most commonly found in tables.
          `,
      },
    }
  )
  .add(
    'untoggled',
    () => (
      <ToggleSmall {...toggleProps()} className="some-class" id="toggle-1" />
    ),
    {
      info: {
        text: `
            Toggles are controls that are used to quickly switch between two possible states. The example below shows
            an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.
            Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled
            prop will only set the value initially. Small toggles may be used when there is not enough space for a regular sized toggle. This issue is most
            commonly found in tables.
          `,
      },
    }
  )
  .add('skeleton', () => <ToggleSmallSkeleton />, {
    info: {
      text: `
            Placeholder skeleton state to use when content is loading.
          `,
    },
  });
