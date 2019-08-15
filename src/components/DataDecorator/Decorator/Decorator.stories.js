/**
 * @file Decorator stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../../.storybook';

import { Decorator } from '../../..';

import props from '../_mocks_';

const { type, value, score, href } = props;
const { scoreThresholds } = Decorator.defaultProps;

const storyProps = () => ({
  type: text('Type (`type`)', type),
  value: text('Value (`value`)', value),
  score: number('Score (`score`)', score, {
    max: scoreThresholds[scoreThresholds.length - 1],
    min: scoreThresholds[0],
    range: true,
  }),
  href: text('Link (`href`)', href),
  onClick: action('onClick'),
  inert: boolean('Non-interactive (`inert`)', false),
  active: boolean('Active (`active`)', false),
  noIcon: boolean('No icon (`noIcon`)', false),
});

storiesOf(components('Decorator'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('Default', () => <Decorator {...storyProps()} />)
  .add('Inline', () => (
    <p className="bx--type-body-long-01">
      This is an inline decorator <Decorator {...storyProps()} inline /> that
      appears alongside some text.
    </p>
  ));
