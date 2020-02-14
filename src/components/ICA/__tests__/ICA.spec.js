/**
 * @file Important content area tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { render } from '@testing-library/react';

import { ICA } from '../../..';
import { Locales } from '../ICA';

describe('ICA', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<ICA label="test ICA" total={10} value={5} />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('ICA');
  });

  it('should render en dash when `value` is `null`', () => {
    const { queryByText } = render(<ICA label="test ICA" value={null} />);
    expect(queryByText('–')).toBeVisible();
  });

  it('should render a large value', () => {
    const { queryByText } = render(<ICA label="test ICA" value={1000000} />);
    expect(queryByText('1.0m')).toBeVisible();
  });

  it('should render a subset of values when `value` and `total` are provided', () => {
    const { getByText } = render(<ICA label="test ICA" value={5} total={10} />);
    expect(getByText('5').nextSibling).toBe(getByText(/10/i));
  });

  it('should not render subset of values when `total` is close to `value`', () => {
    const { queryByText } = render(
      <ICA label="test ICA" value={1000000} total={999995} />
    );
    expect(queryByText('999995')).not.toBeInTheDocument();
    expect(queryByText('1.0m')).toBeVisible();
  });

  it('should not render `total` if it is the same as `value`', () => {
    const { getByText } = render(
      <ICA label="test ICA" value={10} total={10} />
    );
    // Expect 2 ICA nodes: the label and the value.
    expect(getByText(/test ICA/i).parentNode.children.length).toBe(2);
  });

  it('should render `total` when forced', () => {
    const { getByText } = render(
      <ICA label="test ICA" value={10} total={10} forceShowTotal />
    );
    // Expect 3 ICA nodes: the label, value, and the total.
    expect(getByText(/test ICA/i).parentNode.children.length).toBe(3);
  });

  it('should render a percentage', () => {
    const { queryByText } = render(
      <ICA label="test ICA" value={10} percentage />
    );
    expect(queryByText('10').firstElementChild).toBe(queryByText('%'));
  });

  it('should render a percentage', () => {
    const { queryByText } = render(
      <ICA label="test ICA" value={10} percentage />
    );
    expect(queryByText('10').firstElementChild).toBe(queryByText('%'));
  });

  Locales.forEach(locale =>
    test(`should accept '${locale}' locale`, () => {
      const { container } = render(
        <ICA label="test ICA" value={10} locale={locale} />
      );
      expect(() => container).not.toThrow();
    })
  );
});
