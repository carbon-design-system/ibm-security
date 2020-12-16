/**
 * @file Background tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Column, withBackground } from '../../../..';

describe(withBackground.name, () => {
  const ColumnWithBackground = withBackground(Column);

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(
        <ColumnWithBackground className={className} />
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(<ColumnWithBackground data-testid={dataTestId} />).getByTestId(
        dataTestId
      )
    ).toBeInTheDocument();
  });
});
