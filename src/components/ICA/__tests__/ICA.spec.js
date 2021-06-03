/**
 * @file Important content area tests.
 * @copyright IBM Security 2019 - 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { ICA } from '../../..';
import { Locales, namespace } from '../ICA';

const sizes = ['lg', 'xl'];
const testValues = [10, 11];

describe('ICA', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <ICA label="test ICA" total={10} value={5} />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('ICA');
  });

  test('should render en dash when `value` is `null`', () => {
    const { queryByText } = render(<ICA label="test ICA" value={null} />);
    expect(queryByText('–')).toBeVisible();
  });

  test('should render a large value', () => {
    const { queryByText } = render(<ICA label="test ICA" value={1000000} />);
    expect(queryByText('1.0m')).toBeVisible();
  });

  test('should render a subset of values when `value` and `total` are provided', () => {
    const { queryByText } = render(
      <ICA label="test ICA" value={5} total={10} />
    );
    expect(queryByText('5')).toBeVisible();
    expect(queryByText(/10/i)).toBeVisible();
  });

  test('should not render subset of values when `total` is close to `value`', () => {
    const { queryByText } = render(
      <ICA label="test ICA" value={1000000} total={999995} />
    );
    expect(queryByText('999995')).not.toBeInTheDocument();
    expect(queryByText('1.0m')).toBeVisible();
  });

  test('should not render `total` if it is the same as `value`', () => {
    const { queryAllByText } = render(
      <ICA label="test ICA" value={10} total={10} />
    );
    // Should display 1 occurance of `10` (the value):
    expect(queryAllByText(/10/i).length).toBe(1);
  });

  test('should render `total` when forced', () => {
    const { queryAllByText } = render(
      <ICA label="test ICA" value={10} total={10} forceShowTotal />
    );
    // Should display 2 occurances of `10` (the value & the total):
    expect(queryAllByText(/10/i).length).toBe(2);
  });

  test('should not truncate when forced', () => {
    const value = 1000;

    expect(
      render(<ICA label="ICA" truncate={false} value={value} />).getByText(
        `${value}`
      )
    ).toBeInTheDocument();
  });

  test('should render a percentage', () => {
    const { queryByText } = render(
      <ICA label="test ICA" value={10} percentage />
    );
    expect(queryByText('%')).toBeVisible();
  });

  test('should render trending arrow', () => {
    const { container } = render(<ICA trending />);
    expect(container.querySelector('svg')).toBeVisible();
  });

  sizes.forEach(size =>
    test(`should apply correct class when \`size\` is set to '${size}'`, () => {
      const { container } = render(<ICA size={size} />);
      expect(container.firstElementChild).toHaveClass(`${namespace}--${size}`);
    })
  );

  testValues.forEach(value =>
    test('should apply warning class when value is equal to or larger than total', () => {
      expect(
        render(<ICA label="ICA" value={value} total={10} />).getByText(
          `${value}`
        )
      ).toHaveClass(`${namespace}__warning`);
    })
  );

  Locales.forEach(locale =>
    test(`should accept '${locale}' locale`, () => {
      const { container } = render(
        <ICA label="test ICA" value={10} locale={locale} />
      );
      expect(() => container).not.toThrow();
    })
  );
});
