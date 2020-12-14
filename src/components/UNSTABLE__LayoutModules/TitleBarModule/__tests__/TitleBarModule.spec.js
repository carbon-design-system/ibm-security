/**
 * @file Title bar module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { TitleBarModule } from '../../../..';
import { subsectionNamespace } from '..';

const { name } = TitleBarModule;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<TitleBarModule title={name} />);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test('adds text for the title', () => {
    expect(
      render(<TitleBarModule title={name} />).getByText(name)
    ).toBeInTheDocument();
  });

  test(`adds content for the '${name}'`, () => {
    const children = 'children';

    expect(
      render(
        <TitleBarModule title={name}>{children}</TitleBarModule>
      ).getByText(children)
    ).toBeInTheDocument();
  });

  test('adds the subsection variant', () => {
    expect(
      render(
        <TitleBarModule title={name} subsection />
      ).container.querySelector(`.${subsectionNamespace}`)
    ).toBeInTheDocument();
  });

  test('adds the base element used to build the title', () => {
    const element = 'h1';

    expect(
      render(
        <TitleBarModule element={element} title={name} />
      ).container.querySelector(element)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <TitleBarModule data-testid={dataTestId} title={name} />
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
