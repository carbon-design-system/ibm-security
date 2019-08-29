/**
 * @file Data decorator v2 stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { experimental } from '../../../../.storybook';

import { Button, DataDecoratorV2, Decorator } from '../../..';

import props from '../_mocks_';

const { type, value, score, href } = props;
const { scoreThresholds } = Decorator.defaultProps;

const storyProps = () => ({
  active: boolean('Active (`active`)', false),
  href: text('Link (`href`)', href),
  inert: boolean('Non-interactive (`inert`)', false),
  onClick: action('onClick'),
  onClose: action('onClose'),
  noIcon: boolean('No icon (`noIcon`)', false),
  onOpen: action('onOpen'),
  renderFooter: () => <Button size="large">Custom footer</Button>,
  score: number('Score (`score`)', score, {
    max: scoreThresholds[scoreThresholds.length - 1],
    min: scoreThresholds[0],
    range: true,
  }),
  type: text('Type (`type`)', type),
  value: text('Value (`value`)', value),
});

storiesOf(experimental('DataDecoratorV2'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('Default', () => <DataDecoratorV2 {...storyProps()} />, {
    info: {
      text: `
      The \`DataDecoratorV2\` is an experimental component that uses \`PanelV2\`, so it is subject to change while it is being tested. If you need a stable component, please use the \`DataDecorator\` instead.
    `,
    },
  });
