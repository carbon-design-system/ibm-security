/**
 * @file Icon button stories.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';

import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { className, iconClassName, label, sizes } from './_mocks_';

import { IconButton } from '../..';
import { TooltipDirection } from './IconButton';

const iconButtonProps = () => ({
  className,
  disabled: boolean('disabled', false),
  iconClassName,
  label: text('label', label),
  onClick: action('onClick'),
  renderIcon: Add16,
  size: select('size', sizes, sizes[0]),
  tooltip: boolean('tooltip', IconButton.defaultProps.tooltip),
  tooltipDirection: select(
    'tooltipDirection',
    Object.keys(TooltipDirection).map(direction => TooltipDirection[direction]),
    IconButton.defaultProps.tooltipDirection
  ),
});

storiesOf(components('IconButton'), module)
  .addDecorator(centered)
  .add('Default', () => <IconButton {...iconButtonProps()} />, {
    info: {
      text: `
          Basic implementation of an Icon Button component.
        `,
    },
  });
