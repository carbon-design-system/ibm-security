/**
 * @file Button tests.
 * @copyright IBM Security 2020
 */

import Add16 from '@carbon/icons-react/lib/add/16';
import { ButtonKinds } from 'carbon-components-react/lib/prop-types/types';
import { render } from '@testing-library/react';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { Button } from '../../..';
import { carbonPrefix } from '../../../globals/namespace';
import { namespace } from '../Button';

describe('Button', () => {
  test('should have no Axe or DAP violations when `loading`', async () => {
    const { container } = renderWithinLandmark(
      <Button loading iconDescription="test button icon description">
        test loading button
      </Button>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('Button that is loading');
  });

  test('should add custom class', () => {
    const { getByText } = render(
      <Button className="custom-class">test button</Button>
    );
    expect(getByText(/test button/i)).toHaveClass('custom-class');
  });

  test('should pass custom icon description to inner `InlineLoading` when button is `loading`', () => {
    const { queryByLabelText } = render(
      <Button loading iconDescription="test button icon description">
        test loading button
      </Button>
    );
    expect(
      queryByLabelText(/test button icon description/i)
    ).toBeInTheDocument();
  });

  test('should apply `disabled` state', () => {
    const { getByText } = render(<Button disabled>test loading button</Button>);
    expect(getByText(/test loading button/i)).toHaveAttribute('disabled');
    expect(getByText(/test loading button/i)).toHaveClass(
      `${carbonPrefix}btn--disabled`
    );
  });

  test('should set button to `ghost` kind when it is `loading`', () => {
    const { getByText } = render(<Button loading>test loading button</Button>);
    expect(getByText(/test loading button/i)).toHaveClass(
      `${carbonPrefix}btn--ghost`
    );
  });

  ButtonKinds.forEach(kind => {
    if (kind !== 'ghost-danger') {
      test(`should add correct class when \`kind\` is ${kind}`, () => {
        const { getByText } = render(<Button kind={kind}>test button</Button>);
        expect(getByText(/test button/i)).toHaveClass(
          `${carbonPrefix}btn--${kind}`
        );
      });
    }
  });

  test('should add correct classes when `kind` set to `ghost-danger`', () => {
    const { getByText } = render(
      <Button kind="ghost-danger">test button</Button>
    );
    expect(getByText(/test button/i)).toHaveClass(
      `${carbonPrefix}btn--ghost ${namespace}--ghost-danger`
    );
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <Button data-testid="test-id">test button</Button>
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });

  test('should add a custom icon via `renderIcon` prop', () => {
    const { container } = render(
      <Button renderIcon={Add16}>test button</Button>
    );
    expect(container.querySelector('svg')).toBeVisible();
  });

  test('should apply correct class when `size` is `small`', () => {
    const { getByText } = render(<Button size="small">test button</Button>);
    expect(getByText(/test button/i)).toHaveClass(`${carbonPrefix}btn--sm`);
  });

  test('should apply correct class when `size` is `field`', () => {
    const { getByText } = render(<Button size="field">test button</Button>);
    expect(getByText(/test button/i)).toHaveClass(`${carbonPrefix}btn--field`);
  });

  test('should apply correct class when `size` is `large`', () => {
    const { getByText } = render(<Button size="large">test button</Button>);
    expect(getByText(/test button/i)).toHaveClass(`${namespace}--large`);
  });
});
