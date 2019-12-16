/**
 * @file String formatter stories.
 * @copyright IBM Security 2019
 */

import { boolean, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';
import { StringFormatter } from '../..';
import value from './_mocks_';

const storyProps = () => ({
  value: text('Value (`value`)', value),
  truncate: boolean('Truncate (`truncate`)', true),
  lines: number('Lines (`lines`)', 1),
  width: text('Width (`width`)', '200px'),
});

storiesOf(components('StringFormatter'), module).add('Default', () => (
  <StringFormatter {...storyProps()} />
));
