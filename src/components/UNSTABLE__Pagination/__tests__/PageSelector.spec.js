/**
 * @file Page selector tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { PageSelector } from '../../..';

describe('PageSelector', () => {
  test('should add a custom class', () => {
    const { getByText } = render(
      <PageSelector
        currentPage={1}
        totalPages={1}
        onChange={() => {}}
        labelText="test page selector"
        className="custom-class"
      />
    );
    expect(getByText(/test page selector/i).parentNode).toHaveClass(
      'custom-class'
    );
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <PageSelector
        currentPage={1}
        totalPages={1}
        onChange={() => {}}
        data-testid="test-id"
      />
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });
});
