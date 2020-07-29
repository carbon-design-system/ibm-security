/**
 * @file Breadcrumb page title tests.
 * @copyright IBM Security 2020
 */

import { miniUnit } from '@carbon/layout';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { UNSTABLE__BreadcrumbPageTitle } from '../../..';

import { namespace } from '..';

const { name } = UNSTABLE__BreadcrumbPageTitle;

describe(name, () => {
  const ariaLabel = 'Breadcrumb page title';
  const id = 'id';
  const path = [{ children: id, href: `#${id}`, id }];
  const title = 'Title';

  const getLabel = () => screen.queryByLabelText(ariaLabel);

  const props = ({ ...props }) => ({
    'aria-label': ariaLabel,
    title,
    ...props,
  });

  let breadcrumbPageTitle;

  beforeEach(() => {
    breadcrumbPageTitle = render(
      <UNSTABLE__BreadcrumbPageTitle {...props()} />
    );
  });

  test('has no axe or DAP violations', async () => {
    const { container } = breadcrumbPageTitle;

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test('adds text for the title', () => {
    expect(breadcrumbPageTitle.getByText(title)).toBeInTheDocument();
  });

  test('adds `aria-label` for the breadcrumbs', () => {
    expect(getLabel()).not.toBeInTheDocument();

    breadcrumbPageTitle.rerender(
      <UNSTABLE__BreadcrumbPageTitle {...props({ path })} />
    );

    expect(getLabel()).toBeInTheDocument();
  });

  test('adds the path to the breadcrumbs', () => {
    const { container, rerender } = breadcrumbPageTitle;
    const getPath = () => container.querySelector(`#${id}`);

    expect(getPath()).not.toBeInTheDocument();

    rerender(<UNSTABLE__BreadcrumbPageTitle {...props({ path })} />);

    expect(getPath()).toBeInTheDocument();
  });

  test('adds the base element used to build the title', () => {
    const { container, rerender } = breadcrumbPageTitle;

    const element = 'h2';

    rerender(<UNSTABLE__BreadcrumbPageTitle {...props({ element })} />);

    expect(container.querySelector(element)).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const { container, rerender } = breadcrumbPageTitle;

    const className = 'className';

    rerender(<UNSTABLE__BreadcrumbPageTitle {...props({ className })} />);

    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const { getByTestId, rerender } = breadcrumbPageTitle;

    const dataTestId = 'dataTestId';

    rerender(
      <UNSTABLE__BreadcrumbPageTitle
        {...props({ 'data-testid': dataTestId })}
      />
    );

    expect(getByTestId(dataTestId)).toBeInTheDocument();
  });

  describe('Events', () => {
    const onScroll = () =>
      fireEvent.scroll(window, {
        target: { scrollY: miniUnit * 40 },
      });

    test('hides the title when the user scrolls', () => {
      const getTitle = () =>
        breadcrumbPageTitle.container.querySelector(
          `.${namespace}__title--hidden`
        );

      expect(getTitle()).not.toBeInTheDocument();

      onScroll();

      expect(getTitle()).toBeInTheDocument();
    });

    test('renders the breadcrumbs when the user scrolls', () => {
      expect(getLabel()).not.toBeInTheDocument();

      onScroll();

      expect(getLabel()).toBeInTheDocument();
    });
  });
});
