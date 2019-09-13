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

ComboButtonItem.displayName = 'ComboButtonItem';

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
          <ComboButtonItem
            onClick={action('onClick (item 1)')}
            renderIcon={ArrowRight20}
          >
            <span title="Item 1 (becomes primary button and text will be truncated)">
              Item 1 (becomes primary button and text will be truncated)
            </span>
          </ComboButtonItem>
          {Array(5)
            .fill(0)
            .map((item, index) => {
              const text = `Item ${index +
                1} - text may be long and will be truncated`;
              return (
                <ComboButtonItem
                  className="some-class"
                  key={item.id}
                  index={index}
                  onClick={action(`onClick ("${text}")`)}
                >
                  <span title={text}>{text}</span>
                  <Filter20 />
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
      
      The \`ComboButtonItem\` component accepts nodes as children, which you can use to add a \`span\` element with an icon component as shown in the story example.

      Please note: in order to properly truncate the text content of the nodes you pass in, you should consider applying either the \`textOverflow()\` scss mixin provided via [Carbon's helper mixins](https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_helper-mixins.scss), or you can use one of [Carbon's helper classes](https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_helper-classes.scss) directly (like \`.bx--text-truncate--end\` shown in this story example).
    `,
      },
    }
  );
