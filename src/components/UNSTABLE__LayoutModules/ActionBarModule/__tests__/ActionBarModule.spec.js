/**
 * @file Action bar module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ActionBarModule } from '../../../..';

const { name } = ActionBarModule;

describe(name, () => {
  test('has no axe or DAP violations', async () => {
    const { container } = render(<ActionBarModule>{name}</ActionBarModule>);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<ActionBarModule>{name}</ActionBarModule>).getByText(name)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <ActionBarModule data-testid={dataTestId}>{name}</ActionBarModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
