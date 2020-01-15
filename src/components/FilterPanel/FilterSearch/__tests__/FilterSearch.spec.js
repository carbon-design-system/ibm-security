/**
 * @file Filter search tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render, wait, act } from '@testing-library/react';

import FilterSearch from '../FilterSearch';
import Checkbox from '../../../Checkbox';

describe('FilterSearch', () => {
  it('adds custom class name', () => {
    const { container } = render(
      <FilterSearch className="custom-class" labelText="search label" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders results content when keyboard focus is added', () => {
    const { getByTestId, getByLabelText } = render(
      <FilterSearch labelText="search label">
        <div data-testid="result-content" />
      </FilterSearch>
    );

    getByLabelText('search label').focus();
    expect(getByTestId('result-content')).toBeVisible();
  });

  it('does not render results content when keyboard focus is removed', async () => {
    const { queryByTestId, getByLabelText } = render(
      <FilterSearch labelText="search label">
        <div data-testid="result-content" />
      </FilterSearch>
    );

    const searchInput = getByLabelText('search label');
    searchInput.focus();
    searchInput.blur();

    await wait(() =>
      expect(queryByTestId('result-content')).not.toBeInTheDocument()
    );
  });

  it('does not remove results content when keyboard focus transfers to results', () => {
    jest.useFakeTimers();
    const { getByTestId, getByLabelText, container } = render(
      <FilterSearch labelText="search label">
        <div data-testid="result-content">
          <Checkbox labelText="checkbox" id="checkbox" />
        </div>
      </FilterSearch>
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
});
