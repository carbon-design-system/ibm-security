/**
 * @file Filter panel group tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterPanelGroup from '../FilterPanelGroup';

describe('FilterPanelGroup', () => {
  it('renders with a title', () => {
    const { getByText } = render(<FilterPanelGroup title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterPanelGroup title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  it('renders with content', () => {
    const { getByTestId } = render(
      <FilterPanelGroup>
        <div data-testid="content" />
      </FilterPanelGroup>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  it('does not render the count if the title is not provided', () => {
    const { queryByText } = render(<FilterPanelGroup count={200} />);
    expect(queryByText(/200/)).not.toBeInTheDocument();
  });

  it('renders the count if the title is also provided', () => {
    const { queryByText } = render(
      <FilterPanelGroup title="title" count={200} />
    );
    expect(queryByText(/200/)).toBeVisible();
  });

  it('adds custom class name', () => {
    const { container } = render(<FilterPanelGroup className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
