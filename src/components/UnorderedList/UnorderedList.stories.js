/**
 * @file Unordered list stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { ListItem, UnorderedList } from '../..';

storiesOf(components('UnorderedList'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add(
    'Default',
    () => (
      <UnorderedList>
        <ListItem>UnorderedList level 1</ListItem>
        <ListItem>UnorderedList level 1</ListItem>
      </UnorderedList>
    ),
    {
      info:
        'Lists consist of related content grouped together and organized vertically. Unordered lists are used to present content of equal status or value.',
    }
  )
  .add(
    'Nested',
    () => (
      <UnorderedList>
        <ListItem>UnorderedList level 1</ListItem>
        <UnorderedList nested>
          <ListItem>UnorderedList level 2</ListItem>
          <ListItem>UnorderedList level 2</ListItem>
        </UnorderedList>
        <ListItem>UnorderedList level 1</ListItem>
      </UnorderedList>
    ),
    {
      info:
        'Lists consist of related content grouped together and organized vertically. Unordered lists are used to present content of equal status or value.',
    }
  );
