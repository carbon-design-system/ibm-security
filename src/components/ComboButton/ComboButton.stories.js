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
import { settings } from 'carbon-components';

import { patterns } from '../../../.storybook';

import { TooltipDirection } from '../IconButton/IconButton';
import { ComboButton, ComboButtonItem } from '../..';

const { prefix } = settings;

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
  .add(
    'default',
    () => (
      <div style={{ width: '300px' }}>
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
                      <span title={text}>{text}</span>
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
                <span
                  className={`${prefix}--text-truncate--end`}
                  title="Add to folder and this text is very long and will be truncated"
                >
                  Add to folder and this text is very long and will be truncated
                </span>
                <Folder20 />
              </Fragment>
            }
            onClick={action('onClick ("Add to folder...")')}
            primaryFocus
          />
        </ComboButton>
      </div>
    ),
    {
      info: {
        text: `
      The \`ComboButton\` accepts \`ComboButtonItem\` components as children.
      
      The \`ComboButtonItem\` component accepts nodes in the \`itemText\` prop, which you can use to add a \`span\` element with an icon component as shown in the story example.

      Please note: in order to properly truncate the text content of the nodes you pass in, you should consider applying either the \`textOverflow()\` scss mixin provided via [Carbon's helper mixins](https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_helper-mixins.scss), or you can use one of [Carbon's helper classes](https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_helper-classes.scss) directly (like \`.bx--text-truncate--end\` shown in this story example).
    `,
      },
    }
  );
