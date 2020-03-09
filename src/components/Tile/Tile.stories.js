/**
 * @file Tile stories.
 * @copyright IBM Security 2019 - 2020
 */

import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import {
  Tile,
  ClickableTile,
  ExpandableTile,
  SelectableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from '../..';

import { components } from '../../../.storybook';

const props = {
  selectable: () => ({
    selected: boolean('Selected (selected)', false),
    handleClick: action('handleClick'),
    handleKeyDown: action('handleKeyDown'),
  }),
  expandable: () => ({
    tabIndex: number('Tab index (tabIndex)', 0),
    expanded: boolean('Expanded (expanded)', false),
    tileMaxHeight: number('Max height (tileMaxHeight)', 0),
    tileCollapsedIconText: text(
      'Collapsed icon text (tileCollapsedIconText)',
      'Expand'
    ),
    tileExpandedIconText: text(
      'Collapsed icon text (tileExpandedIconText)',
      'Collapse'
    ),
    handleClick: action('handleClick'),
  }),
};

storiesOf(components('Tile'), module)
  .add('Default', () => <Tile>Default tile</Tile>, {
    info: {
      text: `
            Default tile without any interactions
          `,
    },
  })
  .add(
    'Clickable',
    () => (
      <ClickableTile href={text('Href for clickable UI (href)', '#')}>
        Clickable Tile
      </ClickableTile>
    ),
    {
      info: {
        text: `
            Clickable tile
          `,
      },
    }
  )
  .add(
    'Multi-select',
    () => {
      const selectableProps = props.selectable();
      return (
        <div aria-label="selectable tiles" role="group">
          <SelectableTile id="tile-1" name="tiles" {...selectableProps}>
            Multi-select Tile
          </SelectableTile>
          <SelectableTile id="tile-2" name="tiles" {...selectableProps}>
            Multi-select Tile
          </SelectableTile>
          <SelectableTile id="tile-3" name="tiles" {...selectableProps}>
            Multi-select Tile
          </SelectableTile>
        </div>
      );
    },
    {
      info: {
        text: `
            Selectable tile
            Use this to select multiple tiles.
          `,
      },
    }
  )
  .add(
    'Expandable',
    () => (
      <ExpandableTile {...props.expandable()}>
        <TileAboveTheFoldContent>
          <div style={{ height: '200px' }}>Above the fold content here</div>
        </TileAboveTheFoldContent>
        <TileBelowTheFoldContent>
          <div style={{ height: '400px' }}>Below the fold content here</div>
        </TileBelowTheFoldContent>
      </ExpandableTile>
    ),
    {
      info: {
        text: `
            Expandable tile
          `,
      },
    }
  );
