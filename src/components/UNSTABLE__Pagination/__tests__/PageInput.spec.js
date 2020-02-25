/**
 * @file Page input tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { PageInput } from '../../..';

describe('PageInput', () => {
  test('should add a custom class', () => {
    const { getByText } = render(
      <PageInput
        currentPage={1}
        id="test-input-1"
        totalPages={1}
        onChange={() => {}}
        label="test page input"
        className="custom-class"
      />
    );
    expect(getByText(/test page input/i).parentNode).toHaveClass(
      'custom-class'
    );
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <PageInput
        currentPage={1}
        id="test-input-1"
        totalPages={1}
        onChange={() => {}}
        data-testid="test-id"
      />
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });
});
