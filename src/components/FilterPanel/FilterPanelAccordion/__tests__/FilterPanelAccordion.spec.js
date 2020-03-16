/**
 * @file Filter panel accordion tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import FilterPanelAccordion from '../FilterPanelAccordion';

describe('FilterPanelAccordion', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<FilterPanelAccordion title="test accordion title" />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('FilterPanelAccordion');
  });

  test('renders with a title', () => {
    const { getByText } = render(<FilterPanelAccordion title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  test('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterPanelAccordion title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  test('renders with content', () => {
    const { getByTestId } = render(
      <FilterPanelAccordion>
        <div data-testid="content" />
      </FilterPanelAccordion>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelAccordion className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
