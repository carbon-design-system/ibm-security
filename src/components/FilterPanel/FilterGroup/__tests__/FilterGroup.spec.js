/**
 * @file Filter group tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterGroup from '../FilterGroup';

describe('FilterGroup', () => {
  it('renders with a title', () => {
    const { getByText } = render(<FilterGroup title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterGroup title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  it('renders with content', () => {
    const { getByTestId } = render(
      <FilterGroup>
        <div data-testid="content" />
      </FilterGroup>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  it('adds custom class name', () => {
    const { container } = render(<FilterGroup className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
