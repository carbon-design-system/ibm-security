/**
 * @file Combo button stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ArrowRight20 from '@carbon/icons-react/lib/arrow--right/20';
import Filter20 from '@carbon/icons-react/lib/filter/20';

import { patterns } from '../../../.storybook';

import { TooltipDirection } from '../IconButton/IconButton';
import { ComboButton, ComboButtonItem } from '../..';

const props = () => ({
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
          <ComboButtonItem href="#" renderIcon={ArrowRight20}>
            Item 1 (becomes primary button and text will be truncated)
          </ComboButtonItem>
          {Array(5)
            .fill(0)
            .map((item, index) => {
              const text = `Item ${index +
                2} - text may be long and will be truncated`;
              return (
                <ComboButtonItem
                  className="some-class"
                  key={text}
                  index={index}
                  onClick={action(`onClick (${text})`)}
                  renderIcon={index % 2 === 0 ? Filter20 : null} // Show icon at even indexes.
                >
                  {text}
                </ComboButtonItem>
              );
            })}
        </ComboButton>
      </div>
    ),
    {
      info: {
        text: `
          The \`ComboButton\` accepts \`ComboButtonItem\` components as children.

          The first child of the \`ComboButton\` will be marked as the "primary" action, and will appear as a \`Button\` next to the \`OverflowMenu\` of additional actions.
          
          If there is only one child of \`ComboButton\`, then an \`OverflowMenu\` will not be rendered.
        `,
      },
    }
  );
