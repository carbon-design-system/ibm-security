/**
 * @file Search bar stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';
import { compose, getDisplayName, withHandlers, withState } from 'recompose';

import { patterns } from '../../../.storybook';

import { SearchBar } from '../..';
import props from './_mocks_';

const SearchBarWithStateHandlers = compose(
  withState(
    'selectedScopes',
    'updateSelectedScopes',
    ({ selectedScopes = [] }) => selectedScopes
  ),
  withState('value', 'updateValue', ({ value = '' }) => value),
  withHandlers({
    onChange: ({
      onChange,
      updateSelectedScopes,
      updateValue,
    }) => searchObject => {
      const { selectedScopes, value } = searchObject;
      onChange(searchObject);

      updateSelectedScopes(selectedScopes);
      updateValue(value);
    },
  })
)(SearchBar);

SearchBarWithStateHandlers.displayName = getDisplayName(SearchBar);
SearchBarWithStateHandlers.__docgenInfo = SearchBar.__docgenInfo;

const {
  allSelectedScopesLabel,
  clearButtonLabelText,
  labelText,
  placeHolderText,
  scopes,
  selectedScopes,
  scopesTypeLabel,
  submitLabel,
  value,
} = props;

const storyProps = {
  regular: () => ({
    submitLabel: text('Submit label (submitLabel)', submitLabel),
    placeHolderText: text('Placeholder (placeholderText)', placeHolderText),
    labelText,
    clearButtonLabelText,
    onChange: action('onChange'),
    onSubmit: action('onSubmit'),
  }),
  scopes: () => ({
    scopes,
    scopesTypeLabel: text(
      'Scopes type label (scopesTypeLabel)',
      scopesTypeLabel
    ),
    allSelectedScopesLabel: text(
      'All selected scopes label (allSelectedScopesLabel)',
      allSelectedScopesLabel
    ),
    scopeToString: ({ name }) => name,
  }),
  translationIds: {
    'close.menu': 'Close the menu',
    'open.menu': 'Open the menu',
    'clear.all': 'Clear all scopes',
    'clear.selection': 'Clear scope',
  },
};

const { regular, scopes: scopesProps, translationIds } = storyProps;

storiesOf(patterns('SearchBar'), module)
  .addDecorator(withA11y)
  .add('Default', () => <SearchBarWithStateHandlers {...regular()} />)
  .add('Initial value', () => (
    <SearchBarWithStateHandlers {...regular()} value={value} />
  ))
  .add('Scopes', () => (
    <SearchBarWithStateHandlers
      {...regular()}
      {...scopesProps()}
      translateWithId={id => translationIds[id]}
    />
  ))
  .add('Selected scopes', () => (
    <SearchBarWithStateHandlers
      {...regular()}
      {...scopesProps()}
      selectedScopes={selectedScopes}
      translateWithId={id => translationIds[id]}
    />
  ));
