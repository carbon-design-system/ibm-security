/**
 * @file String formatter stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { StringFormatter } from '../..';

import props from './_mocks_';

const { value } = props;

const storyProps = () => ({
  value: text('Value (`value`)', value),
  truncate: boolean('Truncate (`truncate`)', true),
  width: text('Width (`width`)', `${value.length - 1}ch`),
});

storiesOf(components('StringFormatter'), module)
  .addDecorator(centered)
  .addDecorator(withA11y)
  .add('Default', () => <StringFormatter {...storyProps()} />);
