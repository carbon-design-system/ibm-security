/**
 * @file Trending card tests.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { render } from '@testing-library/react';
import React from 'react';

import { Link, TrendingCard } from '../../../';

describe('TrendingCard', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <TrendingCard
        // Use an empty `href` to avoid misdirected Axe "skip-link" violation:
        href="#"
        title="test title"
        subtitle={<span>test subtitle</span>}
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('TrendingCard');
  });

  test('should accept a custom link with its own attributes via `element`', () => {
    const { getByText, queryByTestId } = render(
      <TrendingCard
        title="test title"
        className="test-trending-card-class"
        element={({ children, className, ...other }) => (
          <Link
            className={classnames('test-custom-link-class', className)}
            data-testid="test-data-id"
            href="#test-href"
            {...other}
          >
            {children}
          </Link>
        )}
      />
    );

    // Expect trending card to preserve an extra attribute from custom link:
    expect(queryByTestId('test-data-id')).toBeInTheDocument();

    // Expect trending card to preserve and consolidate custom classes
    // added to both the wrapper and the custom link:
    expect(getByText(/test title/i).closest('a')).toHaveClass(
      'test-trending-card-class',
      'test-custom-link-class'
    );

    // Expect trending card to preserve href from custom link:
    expect(getByText(/test title/i).closest('a')).toHaveAttribute(
      'href',
      '#test-href'
    );
  });

  test('should apply a title via `title`', () => {
    const { queryByText } = render(<TrendingCard title="test title" />);
    expect(queryByText(/test title/i)).toBeVisible();
  });

  test('should apply a subtitle via `subtitle`', () => {
    const { queryByText } = render(
      <TrendingCard title="test title" subtitle="test subtitle" />
    );
    expect(queryByText(/test subtitle/i)).toBeVisible();
  });

  test('should apply a custom class name', () => {
    const { queryByText } = render(
      <TrendingCard title="test title" className="custom-class" />
    );
    expect(queryByText(/test title/i).closest('a')).toHaveClass('custom-class');
  });

  test('should add extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <TrendingCard title="test title" data-testid="test-id" />
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });
});
