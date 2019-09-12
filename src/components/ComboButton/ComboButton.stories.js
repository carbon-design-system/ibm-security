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
import Folder20 from '@carbon/icons-react/lib/folder/20';

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

const itemProps = () => ({
  className: 'some-class',
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
            {...itemProps}
            onClick={action('onClick (item 1)')}
            renderIcon={ArrowRight20}
          >
            <span title="Item 1 (becomes primary)">
              Item 1 (becomes primary)
            </span>
          </ComboButtonItem>
          <ComboButtonItem
            primaryFocus
            onClick={action('onClick (item 2)')}
            {...itemProps}
          >
            <span title="Item 2">Item 2</span>
            <Filter20 />
          </ComboButtonItem>
          <ComboButtonItem {...itemProps} onClick={action('onClick (item 3)')}>
            <span title="Item 3">Item 3</span>
            <Folder20 />
          </ComboButtonItem>
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
