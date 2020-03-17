/**
 * @file Tile stories.
 * @copyright IBM Security 2019 - 2020
 */

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import {
  ClickableTile,
  ExpandableTile,
  RadioTile,
  SelectableTile,
  Tile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
  TileGroup,
} from '../..';

const radioValues = {
  None: '',
  standard: 'standard',
  'default-selected': 'default-selected',
  selected: 'selected',
};

const props = {
  selectable: () => ({
    selected: boolean('Selected (selected)', false),
    handleClick: action('handleClick'),
    handleKeyDown: action('handleKeyDown'),
  }),

  group: () => ({
    name: text('Form item (name in <TileGroup>)', 'tile-group'),
    valueSelected: select(
      'Value of the selected item (valueSelected in <TileGroup>)',
      radioValues,
      ''
    ),
    onChange: action('onChange'),
  }),

  radio: () => ({
    name: text('Form item name (name in <RadioTile>)', 'tiles'),
    onChange: action('onChange'),
    light: boolean('Light variant (light)', false),
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
        <div aria-label="Selectable tiles" role="group">
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
    'Radio',
    () => {
      const radioProps = props.radio();
      return (
        <TileGroup
          defaultSelected="default-selected"
          legend="Radio Tile Group"
          {...props.group()}
        >
          <RadioTile value="standard" {...radioProps}>
            Radio Tile
          </RadioTile>
          <RadioTile value="default-selected" id="tile-2" {...radioProps}>
            Radio Tile
          </RadioTile>
          <RadioTile value="selected" id="tile-3" {...radioProps}>
            Radio Tile
          </RadioTile>
        </TileGroup>
      );
    },
    {
      info: {
        text: `
             The example below shows a Tile Group component with a default selected Tile.
             Although you can set the checked prop on the Tile, when using the RadioTile component
             as a child of the Tile Group, either set the defaultSelected or valueSelected which will
             automatically set the selected prop on the corresponding RadioTile component.
             Use defaultSelected when you want a tile to be selected initially, but don't need to set it
             at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.
             Use this to select one tile at a time.
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
