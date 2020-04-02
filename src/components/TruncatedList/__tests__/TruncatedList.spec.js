/**
 * @file Truncated list tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TruncatedList from '..';
import OrderedList from '../../OrderedList';
import { createChildrenArray } from '../_mocks_';

describe(TruncatedList.name, () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <>
        <TruncatedList>{createChildrenArray(6)}</TruncatedList>
        <TruncatedList>{createChildrenArray(11)}</TruncatedList>
      </>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(TruncatedList.name);
  });

  test('adds custom class name', () => {
    const { container } = render(<TruncatedList className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('truncates more than 10 list items to 5 items by default', () => {
    const { getByText, getAllByText } = render(
      <TruncatedList>{createChildrenArray(11)}</TruncatedList>
    );
    expect(getAllByText(/child \d+/i)).toHaveLength(5);
    expect(getByText(/expandLabel \(6\)/i)).toBeEnabled();
  });

  test('truncates list items based on the provided threshold', () => {
    const { getByText, getAllByText } = render(
      <TruncatedList truncateThreshold={15}>
        {createChildrenArray(20)}
      </TruncatedList>
    );
    expect(getAllByText(/child \d+/i)).toHaveLength(5);
    expect(getByText(/expandLabel \(15\)/i)).toBeEnabled();
  });

  test('does not truncate items if the truncate threshold was not met', () => {
    const { queryByText, getAllByText } = render(
      <TruncatedList truncateThreshold={30}>
        {createChildrenArray(30)}
      </TruncatedList>
    );
    expect(getAllByText(/child \d+/i)).toHaveLength(30);
    expect(queryByText(/expandLabel/i)).not.toBeInTheDocument();
  });

  test('renders items up to the collapsed item limit when truncated', () => {
    const { getByText, getAllByText } = render(
      <TruncatedList truncateThreshold={5} collapsedItemLimit={2}>
        {createChildrenArray(20)}
      </TruncatedList>
    );
    expect(getAllByText(/child \d+/i)).toHaveLength(2);
    expect(getByText(/expandLabel \(18\)/i)).toBeEnabled();
  });

  test('renders items up to collapsed item limit or the truncate threshold when truncated', () => {
    const { getByText, getAllByText } = render(
      <TruncatedList truncateThreshold={2} collapsedItemLimit={10}>
        {createChildrenArray(4)}
      </TruncatedList>
    );
    expect(getAllByText(/child \d+/i)).toHaveLength(2);
    expect(getByText(/expandLabel \(2\)/i)).toBeEnabled();
  });

  test('renders all items when truncated and expanded', () => {
    const { getByText, getAllByTestId } = render(
      <TruncatedList>{createChildrenArray(20)}</TruncatedList>
    );
    userEvent.click(getByText(/expandLabel/i));
    expect(getAllByTestId(/child-\d+/i)).toHaveLength(20);
  });

  test('renders as an unordered list by default', () => {
    const { container } = render(<TruncatedList />);
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  test('renders as a different type of list', () => {
    const { container } = render(<TruncatedList as="ol" />);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  test('renders as a different type of list component', () => {
    const { container } = render(<TruncatedList as={OrderedList} />);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  test('renders as a single list when collapsed', () => {
    const { container } = render(
      <TruncatedList>{createChildrenArray(15)}</TruncatedList>
    );
    expect(container.querySelectorAll('ul')).toHaveLength(1);
  });

  test('renders as a single list when expanded', () => {
    const { container, getByText } = render(
      <TruncatedList>{createChildrenArray(15)}</TruncatedList>
    );
    userEvent.click(getByText(/expandLabel/i));
    expect(container.querySelectorAll('ul')).toHaveLength(1);
  });

  test('applies expand button label', () => {
    const { getByText } = render(
      <TruncatedList expandLabel="View more">
        {createChildrenArray(15)}
      </TruncatedList>
    );
    expect(getByText(/View more \(\d+\)/i)).toBeEnabled();
  });

  test('applies collapse button label', () => {
    const { getByText } = render(
      <TruncatedList collapseLabel="View less">
        {createChildrenArray(15)}
      </TruncatedList>
    );
    userEvent.click(getByText(/expandLabel/i));
    expect(getByText(/View less/i)).toBeEnabled();
  });

  test('toggles expand button label when clicked', () => {
    const { getByText } = render(
      <TruncatedList>{createChildrenArray(11)}</TruncatedList>
    );
    const toggleExpandButton = getByText(/expandLabel/i);
    userEvent.click(toggleExpandButton);
    expect(toggleExpandButton).toHaveTextContent(/collapseLabel/i);
  });

  test('toggles expand button label when clicked twice', () => {
    const { getByText } = render(
      <TruncatedList>{createChildrenArray(11)}</TruncatedList>
    );
    const toggleExpandButton = getByText(/expandLabel/i);
    userEvent.click(toggleExpandButton);
    userEvent.click(toggleExpandButton);
    expect(toggleExpandButton).toHaveTextContent(/expandLabel \(\d+\)/i);
  });
});
