/**
 * @file Filter panel accordion item tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterPanelAccordionItem from '../FilterPanelAccordiontItem';

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

describe('FilterPanelAccordionItem', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      // `FilterPanelAccordionItem` would be
      // wrapped by `FilterPanelAccordion`, which
      // renders as an unordered list:
      <ul>
        <FilterPanelAccordionItem title="test-item-1">
          {createChildChildren(11)}
        </FilterPanelAccordionItem>
        <FilterPanelAccordionItem title="test-item-2">
          {createChildChildren(11)}
        </FilterPanelAccordionItem>
      </ul>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'FilterPanelAccordionItem'
    );
  });

  test('renders with a title', () => {
    const { getByText } = render(
      <FilterPanelAccordionItem title="custom title" />
    );
    expect(getByText(/custom title/i)).toBeVisible();
  });

  test('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterPanelAccordionItem title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  test('renders with content', () => {
    const { getByTestId } = render(
      <FilterPanelAccordionItem>
        <div data-testid="content" />
      </FilterPanelAccordionItem>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelAccordionItem className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
