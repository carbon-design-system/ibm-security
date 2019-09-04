/**
 * @file Combo button stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { radios } from '@storybook/addon-knobs';
import { Filter20 } from '@carbon/icons-react';

import { patterns } from '../../../.storybook';

import { TooltipDirection } from '../IconButton/IconButton';
import { ComboButton } from '../..';

import actions from './_mocks_';

const props = () => ({
  overflowMenuDirection: radios(
    'Direction',
    {
      top: TooltipDirection.TOP,
      bottom: TooltipDirection.BOTTOM,
    },
    TooltipDirection.TOP
  ),
});
storiesOf(patterns('ComboButton'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('default', () => <ComboButton {...props()} actions={actions} />)
  .add('single item', () => <ComboButton {...props()} actions={[actions[0]]} />)
  .add('overflow items', () => {
    const newActions = [...actions];
    newActions.push({
      label: 'Filter list',
      renderIcon: Filter20,
      onClick: () => action('Filter list'),
    });
    return <ComboButton {...props()} actions={newActions} />;
  });

export default actions;
