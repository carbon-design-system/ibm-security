/**
 * @file Filter accortion item tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FilterAccordionItem, { namespace } from '../FilterAccordiontItem';

/**
 * Creates an array of basic children for testing truncation of component.
 * @param {number} length Amount of children to create.
 * @returns {React.Component[]} Array of created children.
 */
const createChildChildren = length =>
  new Array(length).fill(null).map((value, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={index} data-testid={`child-${index + 1}`}>
      child {index + 1}
    </div>
  ));

describe('FilterAccordionItem', () => {
  it('renders with a title', () => {
    const { getByText } = render(<FilterAccordionItem title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  it('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterAccordionItem title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  it('renders with content', () => {
    const { getByTestId } = render(
      <FilterAccordionItem>
        <div data-testid="content" />
      </FilterAccordionItem>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  it('adds custom class name', () => {
    const { container } = render(
      <FilterAccordionItem className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('does not truncate 10 or less children', () => {
    const { queryByText } = render(
      <FilterAccordionItem>{createChildChildren(10)}</FilterAccordionItem>
    );
    expect(queryByText(/expandLabel/i)).not.toBeInTheDocument();
  });

  it('truncates more than 10 children', () => {
    const { queryByText } = render(
      <FilterAccordionItem>{createChildChildren(11)}</FilterAccordionItem>
    );
    expect(queryByText(/expandLabel \(\d+\)/i)).toBeInTheDocument();
  });

  it('toggles expand button label when clicked', () => {
    const { getByText } = render(
      <FilterAccordionItem>{createChildChildren(11)}</FilterAccordionItem>
    );
    const toggleExpandButton = getByText(/expandLabel/i);
    fireEvent.click(toggleExpandButton);
    expect(toggleExpandButton).toHaveTextContent(/collapseLabel/i);
  });

  it('toggles expand button label when clicked twice', () => {
    const { getByText } = render(
      <FilterAccordionItem>{createChildChildren(11)}</FilterAccordionItem>
    );
    const toggleExpandButton = getByText(/expandLabel/i);
    fireEvent.click(toggleExpandButton);
    fireEvent.click(toggleExpandButton);
    expect(toggleExpandButton).toHaveTextContent(/expandLabel \(\d+\)/i);
  });

  it('displays subset of children when truncated and collapsed by default', () => {
    const { getAllByTestId } = render(
      <FilterAccordionItem>{createChildChildren(20)}</FilterAccordionItem>
    );
    expect(getAllByTestId(/child-\d+/i)).toHaveLength(5);
  });

  it('displays all children when truncated and expanded', () => {
    const { getByText, getAllByTestId } = render(
      <FilterAccordionItem>{createChildChildren(20)}</FilterAccordionItem>
    );

    fireEvent.click(getByText(/expandLabel/i));
    expect(getAllByTestId(/child-\d+/i)).toHaveLength(20);
  });

  it('displays separated children when truncated and expanded', () => {
    const { getByText, getByTestId } = render(
      <FilterAccordionItem>{createChildChildren(20)}</FilterAccordionItem>
    );
    fireEvent.click(getByText(/expandLabel/i));
    const lastVisibleChild = getByTestId(/child-10/i);
    const firstNonVisibleChild = getByTestId(/child-11/i);
    expect(lastVisibleChild.closest(`.${namespace}__list-items`)).not.toBe(
      firstNonVisibleChild.closest(`.${namespace}__list-items`)
    );
  });
});
