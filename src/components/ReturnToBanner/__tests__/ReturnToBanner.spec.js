/**
 * @file 'Return to' banner tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ReturnToBanner } from '../../..';

const { name } = ReturnToBanner;

describe(name, () => {
  const children = 'Application';
  const href = '#';
  const labelText = 'Return to';

  const props = ({ ...props }) => ({
    children,
    href,
    labelText,
    ...props,
  });

  let returnToBanner;

  const regExp = value => new RegExp(value);

  beforeEach(() => {
    returnToBanner = render(<ReturnToBanner {...props()} />);
  });

  test('has no axe or DAP violations', async () => {
    const { container } = returnToBanner;

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(returnToBanner.getByText(regExp(children))).toBeInTheDocument();
  });

  test(`adds URL for the '${name}'`, () => {
    expect(
      returnToBanner.container.querySelector(`[href="${href}"]`)
    ).toBeInTheDocument();
  });

  test('adds text for the label', () => {
    expect(returnToBanner.getByText(regExp(labelText))).toBeInTheDocument();
  });

  test('adds text for the view', () => {
    const { queryByText, rerender } = returnToBanner;

    const view = 'View';
    const getView = () => queryByText(regExp(view));

    expect(getView()).not.toBeInTheDocument();

    rerender(<ReturnToBanner {...props({ view })} />);

    expect(getView()).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const { container, rerender } = returnToBanner;

    const className = 'className';

    rerender(<ReturnToBanner {...props({ className })} />);

    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const { getByTestId, rerender } = returnToBanner;

    const dataTestId = 'dataTestId';

    rerender(<ReturnToBanner {...props({ 'data-testid': dataTestId })} />);

    expect(getByTestId(dataTestId)).toBeInTheDocument();
  });
});
