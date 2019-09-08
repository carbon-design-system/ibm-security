/**
 * @file Combo button stories.
 * @copyright IBM Security 2019
 */

import React, { Fragment } from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { radios } from '@storybook/addon-knobs';
import { Filter20, Folder20 } from '@carbon/icons-react';

import { patterns } from '../../../.storybook';

import { TooltipDirection } from '../IconButton/IconButton';
import { ComboButton, ComboButtonItem } from '../..';

import primaryAction from './_mocks_';

const props = () => ({
  primaryAction,
  direction: radios(
    'Menu direction (direction)',
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
  .add('default', () => (
    <ComboButton {...props()}>
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <ComboButtonItem
            className="some-class"
            key={item.id}
            itemText={
              <Fragment>
                <span>Filter list {index + 1}</span>
                <Filter20 />
              </Fragment>
            }
          />
        ))}
      <ComboButtonItem
        className="some-class"
        itemText={
          <Fragment>
            <span>Add to folder</span>
            <Folder20 />
          </Fragment>
        }
      />
    </ComboButton>
  ));
