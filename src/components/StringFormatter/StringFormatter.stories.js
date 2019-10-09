/**
 * @file String formatter stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { boolean, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { StringFormatter } from '../..';

const value =
  'Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.';

const storyProps = () => ({
  lines: number('Lines (`lines`)', 1),
  truncate: boolean('Truncate (`truncate`)', true),
  value: text('Value (`value`)', value),
  width: text('Width (`width`)', `200px`),
});

storiesOf(components('StringFormatter'), module)
  .addDecorator(centered)
  .addDecorator(withA11y)
  .add('Default', () => (
    <div className="bx--type-body-short-01">
      <StringFormatter {...storyProps()} />
    </div>
  ));
