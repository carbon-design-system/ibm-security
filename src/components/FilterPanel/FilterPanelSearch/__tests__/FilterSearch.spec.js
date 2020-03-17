/**
 * @file Filter panel search tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render, wait, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterPanelSearch from '../FilterPanelSearch';
import Checkbox from '../../../Checkbox';

describe('FilterPanelSearch', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<FilterPanelSearch labelText="search label" />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('FilterPanelSearch');
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelSearch className="custom-class" labelText="search label" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('renders results content when keyboard focus is added', () => {
    const { getByTestId, getByLabelText } = render(
      <FilterPanelSearch labelText="search label">
        <div data-testid="result-content" />
      </FilterPanelSearch>
    );

    getByLabelText('search label').focus();
    expect(getByTestId('result-content')).toBeVisible();
  });

  test('does not render results content when keyboard focus is removed', async () => {
    const { queryByTestId, getByLabelText } = render(
      <FilterPanelSearch labelText="search label">
        <div data-testid="result-content" />
      </FilterPanelSearch>
    );

    const searchInput = getByLabelText('search label');
    searchInput.focus();
    searchInput.blur();

    await wait(() =>
      expect(queryByTestId('result-content')).not.toBeInTheDocument()
    );
  });

  test('does not remove results content when keyboard focus transfers to results', () => {
    jest.useFakeTimers();
    const { getByTestId, getByLabelText, container } = render(
      <FilterPanelSearch labelText="search label">
        <div data-testid="result-content">
          <Checkbox labelText="checkbox" id="checkbox" />
        </div>
      </FilterPanelSearch>
    );

    const searchInput = getByLabelText('search label');
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
    const { getByLabelText } = render(
      <FilterPanelSearch labelText="search label" onChange={onChangeMock} />
    );
    userEvent.type(getByLabelText(/search label/i), 'search term');
    expect(onChangeMock).toHaveBeenCalledTimes('search term'.length);
  });
});
