/**
 * @file ICA module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Column, ICAModule } from '../../../..';
import { hoverNamespace } from '..';

const { name } = ICAModule;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<ICAModule>{() => name}</ICAModule>);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<ICAModule>{() => name}</ICAModule>).getByText(name)
    ).toBeInTheDocument();
  });

  test('adds the hover variant', () => {
    expect(
      render(
        <ICAModule hover>
          {({ getLayoutProps }) => <Column {...getLayoutProps()} />}
        </ICAModule>
      ).container.querySelector(`.${hoverNamespace}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <ICAModule data-testid={dataTestId}>{() => name}</ICAModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });

  test('adds a class to the content', () => {
    const className = 'className';

    expect(
      render(
        <ICAModule>
          {({ getLayoutProps }) => (
            <Column {...getLayoutProps({ className })} />
          )}
        </ICAModule>
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the content', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <ICAModule>
          {({ getLayoutProps }) => (
            <Column {...getLayoutProps({ 'data-testid': dataTestId })} />
          )}
        </ICAModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
