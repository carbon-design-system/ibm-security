/**
 * @file Ordered list stories.
 * @copyright IBM Security 2019
 */

import { storiesOf } from '@storybook/react';
import React from 'react';

import { components } from '../../../.storybook';

import { ListItem, OrderedList } from '../..';

storiesOf(components('OrderedList'), module)
  .add(
    'Default',
    () => (
      <OrderedList>
        <ListItem>OrderedList level 1</ListItem>
        <ListItem>OrderedList level 1</ListItem>
      </OrderedList>
    ),
    {
      info:
        'Lists consist of related content grouped together and organized vertically. Ordered lists are used to present content in a numbered list.',
    }
  )
  .add(
    'Nested',
    () => (
      <OrderedList>
        <ListItem>OrderedList level 1</ListItem>
        <OrderedList nested>
          <ListItem>OrderedList level 2</ListItem>
          <ListItem>OrderedList level 2</ListItem>
          <OrderedList nested>
            <ListItem>OrderedList level 3</ListItem>
            <ListItem>OrderedList level 3</ListItem>
          </OrderedList>
        </OrderedList>
        <ListItem>OrderedList level 1</ListItem>
      </OrderedList>
    ),
    {
      info:
        'Lists consist of related content grouped together and organized vertically. Ordered lists are used to present content in a numbered list.',
    }
  );
