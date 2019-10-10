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
import value from './_mocks_';

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
