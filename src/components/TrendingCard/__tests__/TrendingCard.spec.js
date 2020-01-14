/**
 * @file Trending card tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Default as TrendingCard } from '../TrendingCard.stories';
import Link from '../../Link';

describe('TrendingCard', () => {
  it('renders', () => {
    expect(render(<TrendingCard />).container.firstChild).toMatchSnapshot();
  });

  it('renders a custom link', () => {
    expect(
      render(<TrendingCard element={Link} />).container.firstChild
    ).toMatchSnapshot();
  });

  describe('automated accessibility testing', () => {
    it('should have no Axe violations', async () => {
      const { container } = render(<TrendingCard />);
      await expect(container).toHaveNoAxeViolations();
    });

    it('should have no DAP violations', async () => {
      const { container } = render(
        <main>
          <TrendingCard />
        </main>
      );
      await expect(container).toHaveNoDAPViolations('TrendingCard');
    });
  });
});
