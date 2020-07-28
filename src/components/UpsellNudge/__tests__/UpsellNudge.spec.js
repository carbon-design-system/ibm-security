/**
 * @file Upsell nudge tests.
 * @copyright IBM Security 2020
 */

import { App24 } from '@carbon/icons-react';
import { render } from '@testing-library/react';

import React from 'react';

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
    const { container } = upsellNudge;

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
    const { getByText, rerender } = upsellNudge;

    const children = 'children';

    rerender(<UpsellNudge {...props({ children })} />);

    expect(getByText(children)).toBeInTheDocument();
  });

  test('adds the light variant', () => {
    const { container, rerender } = upsellNudge;

    rerender(<UpsellNudge {...props({ light: true })} />);

    expect(container.querySelector(`.${namespace}--light`)).toBeInTheDocument();
  });

  test('adds the base element used to build the title', () => {
    const { container, rerender } = upsellNudge;

    const element = 'h1';

    rerender(<UpsellNudge {...props({ element })} />);

    expect(container.querySelector(element)).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const { container, rerender } = upsellNudge;

    const className = 'className';

    rerender(<UpsellNudge {...props({ className })} />);

    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const { getByTestId, rerender } = upsellNudge;

    const dataTestId = 'dataTestId';

    rerender(<UpsellNudge {...props({ 'data-testid': dataTestId })} />);

    expect(getByTestId(dataTestId)).toBeInTheDocument();
  });
});
