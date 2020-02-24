/**
 * @file Filter panel accordion tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterPanelAccordion from '../FilterPanelAccordion';

describe('FilterPanelAccordion', () => {
  it('renders with a title', () => {
    const { getByText } = render(<FilterPanelAccordion title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterPanelAccordion title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  it('renders with content', () => {
    const { getByTestId } = render(
      <FilterPanelAccordion>
        <div data-testid="content" />
      </FilterPanelAccordion>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  it('adds custom class name', () => {
    const { container } = render(
      <FilterPanelAccordion className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
