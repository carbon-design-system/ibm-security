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
    render(
      <FilterPanelAccordion
        heading="test accordion title"
        title="test title"
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('FilterPanelAccordion');
  });

  test('renders with a title attribute', () => {
    const { getByTitle } = render(
      <FilterPanelAccordion title="custom title" />
    );
    expect(getByTitle(/custom title/i)).toBeVisible();
  });

  test('renders with a heading node', () => {
    const { getByTestId } = render(
      <FilterPanelAccordion heading={<span data-testid="node-title" />} />
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
