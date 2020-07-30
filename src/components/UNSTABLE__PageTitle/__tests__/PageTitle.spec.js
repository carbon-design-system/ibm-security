/**
 * @file Page title tests.
 * @copyright IBM Security 2020
 */

import { miniUnit } from '@carbon/layout';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { UNSTABLE__PageTitle } from '../../..';

import { namespace } from '..';

const { name } = UNSTABLE__PageTitle;

describe(name, () => {
  const title = 'Title';

  const props = ({ ...props }) => ({
    title,
    ...props,
  });

  let pageTitle;

  beforeEach(() => {
    pageTitle = render(<UNSTABLE__PageTitle {...props()} />);
  });

  test('has no axe or DAP violations', async () => {
    const { container } = pageTitle;

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test('adds text for the title', () => {
    expect(pageTitle.getByText(title)).toBeInTheDocument();
  });

  test('adds contents of the `PageTitle`', () => {
    const { rerender } = pageTitle;

    const children = 'children';

    rerender(<UNSTABLE__PageTitle {...props({ children })} />);

    expect(pageTitle.getByText(children)).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const { container, rerender } = pageTitle;

    const className = 'className';

    rerender(<UNSTABLE__PageTitle {...props({ className })} />);

    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const { getByTestId, rerender } = pageTitle;

    const dataTestId = 'dataTestId';

    rerender(<UNSTABLE__PageTitle {...props({ 'data-testid': dataTestId })} />);

    expect(getByTestId(dataTestId)).toBeInTheDocument();
  });

  describe('Events', () => {
    const onScroll = () =>
      fireEvent.scroll(window, {
        target: { scrollY: miniUnit * 40 },
      });

    test('hides the title when the user scrolls', () => {
      const getTitle = () =>
        pageTitle.container.querySelector(`.${namespace}__title--hidden`);

      expect(getTitle()).not.toBeInTheDocument();

      onScroll();

      expect(getTitle()).toBeInTheDocument();
    });

    test('renders the breadcrumbs when the user scrolls', () => {
      // expect().not.toBeInTheDocument();

      onScroll();

      // expect().toBeInTheDocument();
    });
  });
});
