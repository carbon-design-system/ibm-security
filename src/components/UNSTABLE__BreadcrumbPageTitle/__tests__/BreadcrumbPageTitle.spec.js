/**
 * @file Breadcrumb page title tests.
 * @copyright IBM Security 2020
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { UNSTABLE__BreadcrumbPageTitle } from '../../..';

const { name } = UNSTABLE__BreadcrumbPageTitle;

describe(name, () => {
  const ariaLabel = 'Breadcrumb page title';
  const id = 'id';
  const title = 'Title';

  const props = ({ ...props }) => ({
    'aria-label': ariaLabel,
    path: [{ children: id, href: `#${id}`, id }],
    title,
    ...props,
  });

  test('has no axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <UNSTABLE__BreadcrumbPageTitle {...props()} />
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test('adds text for the title', () => {
    expect(
      render(<UNSTABLE__BreadcrumbPageTitle {...props()} />).getByText(title)
    ).toBeInTheDocument();
  });

  test('adds `aria-label` for the breadcrumbs', () => {
    render(<UNSTABLE__BreadcrumbPageTitle {...props()} />);

    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
  });

  test('adds the path to the breadcrumbs', () => {
    expect(
      render(
        <UNSTABLE__BreadcrumbPageTitle {...props()} />
      ).container.querySelector(`#${id}`)
    ).toBeInTheDocument();
  });

  test('adds the base element used to build the title', () => {
    const element = 'h2';

    expect(
      render(
        <UNSTABLE__BreadcrumbPageTitle {...props({ element })} />
      ).container.querySelector(element)
    ).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(
        <UNSTABLE__BreadcrumbPageTitle {...props({ className })} />
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <UNSTABLE__BreadcrumbPageTitle
          {...props({ 'data-testid': dataTestId })}
        />
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
