/**
 * @file Trending card tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Default as TrendingCard } from '../TrendingCard.stories';

describe('TrendingCard', () => {
  it('renders', () => {
    expect(render(<TrendingCard />).container.firstChild).toMatchSnapshot();
  });

  it('renders a custom link', () => {
    expect(
      render(<TrendingCard element="a" />).container.firstChild
    ).toMatchSnapshot();
  });
});
