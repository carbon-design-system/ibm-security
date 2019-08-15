/**
 * @file Important content area stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { ICA } from '../..';
import { Locales } from './ICA';

import props from './_mocks_';

const { label, total, value: icaValue } = props;

const storyProps = ({ value = icaValue, total } = {}) => ({
  label: text('Label (label)', label),
  value: number('Value (value)', value),
  total: number('Total (total)', total),
  percentage: boolean('Percentage (percentage)', false),
  forceShowTotal: boolean('Show total (forceShowTotal)', false),
  locale: select('Locale (locale)', Locales, Locales[0]),
});

storiesOf(components('ICA'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('Default', () => <ICA {...storyProps()} />)
  .add('Null value', () => <ICA {...storyProps({ value: null })} />)
  .add('1000 value', () => <ICA {...storyProps({ value: icaValue * 100 })} />)
  .add('1000000 value', () => (
    <ICA {...storyProps({ value: icaValue * 100000 })} />
  ))
  .add('Total', () => <ICA {...storyProps({ total })} />);
