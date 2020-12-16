/**
 * @file Title bar module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { LayoutModule } from '../../..';
import { getLayoutModuleNamespace } from '../LayoutModule';

const { name } = LayoutModule;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <LayoutModule namespace={name}>{name}</LayoutModule>
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<LayoutModule namespace={name}>{name}</LayoutModule>).getByText(
        name
      )
    ).toBeInTheDocument();
  });

  test('adds the style namespace to the containing node', () => {
    expect(
      render(
        <LayoutModule namespace={name}>{name}</LayoutModule>
      ).container.querySelector(`.${getLayoutModuleNamespace(name)}`)
    ).toBeInTheDocument();
  });

  test(`adds the base element used to build the '${name}`, () => {
    const as = 'section';

    expect(
      render(
        <LayoutModule as={as} namespace={name}>
          {name}
        </LayoutModule>
      ).container.querySelector(as)
    ).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(
        <LayoutModule className={className} namespace={name}>
          {name}
        </LayoutModule>
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <LayoutModule data-testid={dataTestId} namespace={name}>
          {name}
        </LayoutModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
