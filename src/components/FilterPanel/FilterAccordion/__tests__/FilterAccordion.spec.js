/**
 * @file Filter accordion tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterAccordion from '../FilterAccordion';

describe('FilterAccordion', () => {
  it('renders with a title', () => {
    const { getByText } = render(<FilterAccordion title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterAccordion title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  it('renders with content', () => {
    const { getByTestId } = render(
      <FilterAccordion>
        <div data-testid="content" />
      </FilterAccordion>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  it('adds custom class name', () => {
    const { container } = render(<FilterAccordion className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
