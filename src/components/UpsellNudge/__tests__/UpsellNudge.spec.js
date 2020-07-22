/**
 * @file Truncated list tests.
 * @copyright IBM Security 2020
 */

import { App24 } from '@carbon/icons-react';
import { render } from '@testing-library/react';

import React from 'react';

import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { UpsellNudge } from '../../..';
import { namespace } from '..';

const { name } = UpsellNudge;

describe(name, () => {
  const button = 'Button';
  const icon = 'Icon';
  const title = 'Title';

  const props = ({ ...props }) => ({
    button: { children: button },
    renderIcon: () => <App24 data-testid={icon} />,
    title,
    ...props,
  });

  let upsellNudge;

  beforeEach(() => {
    upsellNudge = render(<UpsellNudge {...props()} />);
  });

  test('has no axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(<UpsellNudge {...props()} />);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test('adds text for the title', () => {
    expect(upsellNudge.getByText(title)).toBeInTheDocument();
  });

  test('renders the icon', () => {
    expect(upsellNudge.getByTestId(icon)).toBeInTheDocument();
  });

  test('adds props for the `Button`', () => {
    expect(upsellNudge.getByText(button)).toBeInTheDocument();
  });

  test(`adds content for the '${name}'`, () => {
    const children = 'children';

    expect(
      render(<UpsellNudge {...props({ children })} />).getByText(children)
    ).toBeInTheDocument();
  });

  test('adds the light variant', () => {
    expect(
      render(
        <UpsellNudge {...props({ light: true })} />
      ).container.querySelector(`.${namespace}--light`)
    ).toBeInTheDocument();
  });

  test('adds the base element used to build the title', () => {
    const element = 'h1';

    expect(
      render(<UpsellNudge {...props({ element })} />).container.querySelector(
        element
      )
    ).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(<UpsellNudge {...props({ className })} />).container.querySelector(
        `.${className}`
      )
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <UpsellNudge {...props({ 'data-testid': dataTestId })} />
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
