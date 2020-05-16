/**
 * @file Filter panel checkbox with overflow menu stories.
 * @copyright IBM Security 2020
 */

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';

import React from 'react';

import { patterns, info } from '../../../../.storybook';
import {
  FilterPanelCheckboxWithOverflowMenu,
  OverflowMenuItem,
} from '../../..';

storiesOf(
  patterns(`FilterPanel/${FilterPanelCheckboxWithOverflowMenu.name}`),
  module
).add(
  'default',
  () => (
    <FilterPanelCheckboxWithOverflowMenu
      labelText={text('Checkbox label (labelText)', 'Checkbox label')}
      count={number('Checkbox count (count)', 10)}
      onChange={action('onChange')}
      id="checkbox-id"
    >
      <OverflowMenuItem
        primaryFocus
        itemText="Option 1"
        onClick={action('OverflowMenuItem onClick')}
      />
      <OverflowMenuItem
        itemText="Option 2"
        onClick={action('OverflowMenuItem onClick')}
      />
    </FilterPanelCheckboxWithOverflowMenu>
  ),

  info(
    `## Filter panel checkbox with overflow menu
This component allows consumers to provide more than one option when selecting a filter. An example
use-case is when the application must provide an exclusionary filter option (also known as a
not-filter). The overflow menu options give users more ways to interact with a given filter.`,
    {
      library: 'ibm-security',
      story: 'patterns-filterpanelcheckbox',
      id: 'default',
    }
  )
);
