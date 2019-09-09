/**
 * @file Combo button stories.
 * @copyright IBM Security 2019
 */

import React, { Fragment } from 'react';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { radios, text } from '@storybook/addon-knobs';
import { ArrowRight20, Filter20, Folder20 } from '@carbon/icons-react';

import { patterns } from '../../../.storybook';

import { TooltipDirection } from '../IconButton/IconButton';
import { ComboButton, ComboButtonItem } from '../..';

const props = () => ({
  primaryAction: {
    label: text('Primary button label (primaryAction.label)', 'Start a task'),
    renderIcon: ArrowRight20,
    onClick: action('onClick (primaryAction'),
  },
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
        .map((item, index) => {
          const text = `Filter list ${index + 1}`;
          return (
            <ComboButtonItem
              className="some-class"
              key={item.id}
              index={index}
              itemText={
                <Fragment>
                  <span>{text}</span>
                  <Filter20 />
                </Fragment>
              }
              onClick={action(`onClick ("${text}")`)}
            />
          );
        })}
      <ComboButtonItem
        className="some-class"
        index={5}
        itemText={
          <Fragment>
            <span>Add to folder</span>
            <Folder20 />
          </Fragment>
        }
        onClick={action('onClick ("Add to folder")')}
        primaryFocus
      />
    </ComboButton>
  ));
