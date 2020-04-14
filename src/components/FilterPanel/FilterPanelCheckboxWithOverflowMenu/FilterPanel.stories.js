/**
 * @file Filter panel checkbox with overflow menu stories.
 * @copyright IBM Security 2020
 */

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';

import React from 'react';

import { patterns } from '../../../../.storybook';

import FilterPanelCheckboxWithOverflowMenu from '.';
import FilterPanelSearch from '../FilterPanelSearch';
import OverflowMenuItem from '../../OverflowMenuItem';

storiesOf(
  patterns(`FilterPanel/${FilterPanelCheckboxWithOverflowMenu.name}`),
  module
)
  .add(
    'default',
    () => (
      <FilterPanelCheckboxWithOverflowMenu
        labelText={text('Checkbox label (labelText)', 'Checkbox label')}
        count={number('Checkbox count (count)', 10)}
        onChange={action('onChange')}
        id="checkbox-id"
      >
        <OverflowMenuItem primaryFocus itemText="Option 1" />
        <OverflowMenuItem itemText="Option 2" />
      </FilterPanelCheckboxWithOverflowMenu>
    ),
    {
      info: {
        text: `## Filter panel checkbox with overflow menu
This component allows consumers to provide more than one option when selecting a filter. An example
use-case is when the application must provide an exclusionary filter option (also known as a
not-filter). The overflow menu options give users more ways to interact with a given filter.`,
      },
    }
  )
  .add('in filter search', () => (
    <FilterPanelSearch defaultValue="Focus on here">
      <FilterPanelCheckboxWithOverflowMenu
        labelText={text('Checkbox label (labelText)', 'Checkbox with overflow')}
        count={number('Checkbox count (count)', 10)}
        onChange={action('onChange')}
        id="checkbox-overflow"
      >
        <OverflowMenuItem primaryFocus itemText="Option 1" />
        <OverflowMenuItem itemText="Option 2" />
      </FilterPanelCheckboxWithOverflowMenu>
    </FilterPanelSearch>
  ));
