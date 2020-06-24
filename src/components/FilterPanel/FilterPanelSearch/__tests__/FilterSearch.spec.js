/**
 * @file Filter panel search tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render, wait, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import FilterPanelSearch from '../FilterPanelSearch';
import Checkbox from '../../../Checkbox';

describe('FilterPanelSearch', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <FilterPanelSearch labelText="search label" />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('FilterPanelSearch');
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelSearch className="custom-class" labelText="search label" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('renders results content when keyboard focus is added', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <FilterPanelSearch
        labelText="search label"
        placeHolderText="search placeholder"
      >
        <div data-testid="result-content" />
      </FilterPanelSearch>
    );

    getByPlaceholderText('search placeholder').focus();
    expect(getByTestId('result-content')).toBeVisible();
  });

  test('does not render results content when keyboard focus is removed', async () => {
    const { queryByTestId, getByPlaceholderText } = render(
      <FilterPanelSearch
        labelText="search label"
        placeHolderText="search placeholder"
      >
        <div data-testid="result-content" />
      </FilterPanelSearch>
    );

    const searchInput = getByPlaceholderText('search placeholder');
    searchInput.focus();
    searchInput.blur();

    await wait(() =>
      expect(queryByTestId('result-content')).not.toBeInTheDocument()
    );
  });

  test('does not remove results content when keyboard focus transfers to results', () => {
    jest.useFakeTimers();
    const { getByTestId, getByPlaceholderText, container } = render(
      <FilterPanelSearch
        labelText="search label"
        placeHolderText="search placeholder"
      >
        <div data-testid="result-content">
          <Checkbox labelText="checkbox" id="checkbox" />
        </div>
      </FilterPanelSearch>
    );

    const searchInput = getByPlaceholderText('search placeholder');
    searchInput.focus();
    container.querySelector('#checkbox').focus();

    // Speed timeout timer up to make assertion
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('result-content')).toBeVisible();
  });

  test('invokes onChange when the user types a value into the search', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <FilterPanelSearch
        labelText="search label"
        placeHolderText="search placeholder"
        onChange={onChangeMock}
      />
    );
    userEvent.type(getByPlaceholderText(/search placeholder/i), 'search term');
    expect(onChangeMock).toHaveBeenCalledTimes('search term'.length);
  });
});
