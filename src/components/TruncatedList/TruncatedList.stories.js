/**
 * @file Truncated list stories.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, color, text } from '@storybook/addon-knobs';
import { components } from '../../../.storybook';
import TruncatedList from '.';
import { createChildrenArray } from './_mocks_';

storiesOf(components(TruncatedList.name), module).add(
  'default',
  () => (
    <TruncatedList
      className="other-class"
      as={select('list element (as)', ['ul', 'ol', 'dl'], 'ul')}
      scrollGradientColor={color(
        'scroll gradient color (scrollGradientColor)',
        TruncatedList.defaultProps.scrollGradientColor
      )}
      expandLabel={text('Expand button label (expandLabel)', 'View more')}
      collapseLabel={text('Collapse button label (collapseLabel)', 'View less')}
      truncateThreshold={number(
        'Number of items to show before truncation (truncateThreshold)',
        10
      )}
      collapsedItemLimit={number(
        'Number of items to show when collapsed (collapsedItemLimit)',
        5
      )}
      expandedItemLimit={number(
        'Number items to show when expanded (expandedItemLimit)',
        10
      )}
    >
      {createChildrenArray(number('Number of items in list', 15))}
    </TruncatedList>
  ),
  {
    info: {
      text: `## Truncated list
This component is a list that accepts any number of list items (li). It allows consumers to control
how many items are revealed to the user while giving the user the ability to expand the list and see
the entire list. There are three props that control how many items a user can see at once:

  * \`truncateThreshold\`: This prop will give consumers control of how many items are rendered
  before the list is truncated.

  * \`collapsedItemLimit\`: When the number of items surpass the truncation threshold, this prop
  allows consumers to set how many items should be displayed when the list is collapsed.

  * \`expandedItemLimit\`: When the list is truncated and expanded, all items in the list are
  rendered. However, this prop allows consumers to limit the height of the list so the expanded list
  is not too long. If the list is long, it becomes scrollable.`,
    },
  }
);
