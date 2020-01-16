/**
 * @file Filter label tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterLabel from '../FilterLabel';

describe('FilterLabel', () => {
  it('renders with children', () => {
    const { getByText } = render(<FilterLabel>custom label</FilterLabel>);
    expect(getByText(/custom label/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterLabel>
        <span data-testid="node-label" />
      </FilterLabel>
    );
    expect(getByTestId('node-label')).toBeVisible();
  });

  it('renders with count', () => {
    const { container } = render(<FilterLabel count={10} />);
    expect(container).toHaveTextContent('10');
  });

  it('renders with a 0 count', () => {
    const { container } = render(<FilterLabel count={0} />);
    expect(container).toHaveTextContent('0');
  });

  it('adds custom count label', () => {
    const { getByLabelText } = render(
      <FilterLabel count={100} countLabel={count => `${count} chickens`} />
    );
    expect(getByLabelText(/\(100 chickens\)/i)).toHaveTextContent('100');
  });

  it('adds custom class name', () => {
    const { container } = render(<FilterLabel className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('adds custom count class name', () => {
    const { container } = render(
      <FilterLabel countClassName="custom-class" count={10} />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
