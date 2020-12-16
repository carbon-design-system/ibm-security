/**
 * @file Title bar module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Card, CardModule } from '../../../..';

const { name } = CardModule;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<CardModule>{() => name}</CardModule>);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<CardModule>{() => name}</CardModule>).getByText(name)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <CardModule data-testid={dataTestId}>{() => name}</CardModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });

  test('adds a class to the content', () => {
    const className = 'className';

    expect(
      render(
        <CardModule>
          {({ getLayoutProps }) => <Card {...getLayoutProps({ className })} />}
        </CardModule>
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the content', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <CardModule>
          {({ getLayoutProps }) => (
            <Card {...getLayoutProps({ 'data-testid': dataTestId })} />
          )}
        </CardModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
