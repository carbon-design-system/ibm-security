/**
 * @file Filter panel stories.
 * @copyright IBM Security 2020
 */

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object } from '@storybook/addon-knobs';

import { compose, withState, withHandlers, getDisplayName } from 'recompose';
import React from 'react';

import { patterns } from '../../../.storybook';

import {
  filterData,
  title,
  filtersExpandLabel,
  filtersCollapseLabel,
  noFiltersResultsLabel,
  filterSearchLabel,
  labels,
} from './_mocks_';

import FilterPanel from './FilterPanel';
import FilterSearch from './FilterSearch';
import FilterAccordion from './FilterAccordion';
import FilterAccordionItem from './FilterAccordionItem';
import FilterCheckbox from './FilterCheckbox';

const FilterPanelWithState = compose(
  // Maintain a state attribute called filterData.
  withState('filterData', 'onFilterToggle', ({ filterData }) => filterData),

  // When value changes update state and call passed in onChange method.
  withHandlers({
    onChange: ({ onChange, onFilterToggle, filterData }) => filter => {
      onChange(filter);

      // eslint-disable-next-line no-param-reassign
      filterData.filters[filter.id].enabled = !filterData.filters[filter.id]
        .enabled;
      onFilterToggle(filterData);
    },
  })
)(FilterPanel);

FilterPanelWithState.displayName = getDisplayName(FilterPanel);
FilterPanelWithState.__docgenInfo = FilterPanel.__docgenInfo;

storiesOf(patterns('FilterPanel'), module)
  .addDecorator(story => (
    <div style={{ padding: '1rem', width: '16rem', margin: '0 auto' }}>
      {story()}
    </div>
  ))
  .add('default', () => (
    <FilterPanel title={text('FilterPanel title (title)', title)}>
      <FilterSearch
        labelText={text(
          'FilterSearch label text (labelText)',
          filterSearchLabel
        )}
        placeHolderText={text(
          'FilterSearch placeholder text (placeHolderText)',
          filterSearchLabel
        )}
        onChange={action('FilterSearch onChange')}
      />

      <FilterAccordion title="Filter accordion" count={150}>
        <FilterAccordionItem
          open
          title="Filter accordion item"
          count={3}
          expandLabel="View more"
          collapseLabel="View less"
        >
          <FilterCheckbox
            labelText="Filter checkbox"
            id="filter-checkbox"
            count={10}
            onChange={action('FilterCheckbox onChange')}
          />
          <FilterCheckbox
            labelText="Long filter checkbox  label"
            id="long-filter-checkbox"
            count={10}
            onChange={action('FilterCheckbox onChange')}
          />
          <FilterCheckbox
            labelText="Checked"
            id="checked"
            count={10}
            defaultChecked
            onChange={action('FilterCheckbox onChange')}
          />
        </FilterAccordionItem>
        <FilterAccordionItem
          title="Truncated accordion item"
          count={12}
          expandLabel="View more"
          collapseLabel="View less"
        >
          {new Array(12).fill(null).map((value, index) => (
            <FilterCheckbox
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              labelText={`Filter ${index + 1}`}
              id={`filter-checkbox-${index + 1}`}
              count={10}
              onChange={action('FilterCheckbox onChange')}
            />
          ))}
        </FilterAccordionItem>
      </FilterAccordion>
      <FilterAccordion title="Filter accordion 2" count={100}>
        <FilterAccordionItem
          title="Filter accordion item 1"
          count={4}
          expandLabel="View more"
          collapseLabel="View less"
        >
          {new Array(4).fill(null).map((value, index) => (
            <FilterCheckbox
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              labelText={`Filter ${index + 1}`}
              count={10}
            />
          ))}
        </FilterAccordionItem>

        <FilterAccordionItem
          title="Filter accordion item 2"
          count={6}
          expandLabel="View more"
          collapseLabel="View less"
        >
          {new Array(6).fill(null).map((value, index) => (
            <FilterCheckbox
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              labelText={`Filter ${index + 1}`}
              count={10}
            />
          ))}
        </FilterAccordionItem>
      </FilterAccordion>
    </FilterPanel>
  ))
  .add(
    'with deprecated FilterData',
    () => (
      <FilterPanelWithState
        onChange={action('onChange')}
        title={text('title', title)}
        filtersExpandLabel={text('filtersExpandLabel', filtersExpandLabel)}
        filtersCollapseLabel={text(
          'filtersCollapseLabel',
          filtersCollapseLabel
        )}
        noFiltersResultsLabel={text(
          'noFiltersResultsLabel',
          noFiltersResultsLabel
        )}
        filterSearchLabel={text('filterSearchLabel', filterSearchLabel)}
        filterData={object('filterData', filterData)}
        labels={labels}
      />
    ),
    {
      info: {
        text: `## Basic implementation of Filter Panel

          The most crucial requirement for this component is the structure of the filter data. Be sure to
          check out type definitions for [filter data](https://github.com/carbon-design-system/ibm-security/blob/master/src/components/FilterPanel/LEGACY_FilterPanel/FilterPanelUtilities.js#L60).
          Using the unique prop for each label will override the version passed in the \`labels\` prop.`,
      },
    }
  );
