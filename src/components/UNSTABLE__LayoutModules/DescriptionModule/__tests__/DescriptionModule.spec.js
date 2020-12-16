/**
 * @file Description module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { DescriptionModule } from '../../../..';

const { name } = DescriptionModule;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <DescriptionModule>{() => name}</DescriptionModule>
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<DescriptionModule>{() => name}</DescriptionModule>).getByText(
        name
      )
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <DescriptionModule data-testid={dataTestId}>
          {() => name}
        </DescriptionModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });

  test('adds a class to the content', () => {
    const className = 'className';

    expect(
      render(
        <DescriptionModule>
          {({ getLayoutProps }) => <p {...getLayoutProps({ className })} />}
        </DescriptionModule>
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the content', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <DescriptionModule>
          {({ getLayoutProps }) => (
            <p {...getLayoutProps({ 'data-testid': dataTestId })} />
          )}
        </DescriptionModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
