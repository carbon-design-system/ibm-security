/**
 * @file String formatter tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { StringFormatter } from '../../..';
import { namespace } from '../StringFormatter';

describe('StringFormatter', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <StringFormatter
        value="This is a long test string that would normally be truncated."
        truncate
        lines={2}
        width="50px"
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('StringFormatter');
  });

  test('should add a custom class', () => {
    const { getByText } = render(
      <StringFormatter value="test content" className="custom-class" />
    );
    expect(getByText(/test content/i)).toHaveClass('custom-class');
  });

  test('should truncate text via the `truncate` prop', () => {
    const { getAllByText } = render(
      <StringFormatter value="test content" truncate />
    );
    // Expect two elements with the target text: the base component
    // and the tooltip that is added when `truncate={true}`.
    expect(getAllByText(/test content/i).length).toBe(2);

    // Expect to see the truncate class on the inner non-tooltip element:
    expect(getAllByText(/test content/i)[0]).toHaveClass(
      `${namespace}--truncate`
    );
  });

  test('should apply correct style attribute when `lines` provided', () => {
    const { getAllByText } = render(
      <StringFormatter value="test content" lines={4} />
    );
    expect(getAllByText(/test content/i)[0]).toHaveAttribute(
      'style',
      'line-clamp: 4;'
    );
  });

  test('should apply correct style attribute when `width` provided', () => {
    const { getAllByText } = render(
      <StringFormatter value="test content" width="200px" />
    );
    expect(getAllByText(/test content/i)[0]).toHaveAttribute(
      'style',
      'max-width: 200px; line-clamp: 1;'
    );
  });
});
