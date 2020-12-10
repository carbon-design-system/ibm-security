/**
 * @file Action bar module items tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ActionBarModuleItems } from '../../../../..';

const { name } = ActionBarModuleItems;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <ActionBarModuleItems>{name}</ActionBarModuleItems>
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<ActionBarModuleItems>{name}</ActionBarModuleItems>).getByText(
        name
      )
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <ActionBarModuleItems data-testid={dataTestId}>
          {name}
        </ActionBarModuleItems>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
