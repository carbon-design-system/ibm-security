/**
 * @file Interactive tag tests.
 * @copyright IBM Security 2019 - 2020
 */

import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import React from 'react';

import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { InteractiveTag } from '../../..';
import { namespace } from '../InteractiveTag';

describe('InteractiveTag', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <InteractiveTag removable>test tag</InteractiveTag>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('InteractiveTag');
  });

  test('should add close button with `aria-label` when `removable` is `true`', () => {
    const { queryByLabelText } = render(
      <InteractiveTag removeBtnLabel="test label" removable>
        test tag
      </InteractiveTag>
    );
    expect(queryByLabelText(/test label/i)).toBeVisible();
  });

  test('should add children as tag content', () => {
    const { queryByText } = render(<InteractiveTag>test tag</InteractiveTag>);
    expect(queryByText(/test tag/i)).toBeVisible();
  });

  test('should add a custom class', () => {
    const { getByText } = render(
      <InteractiveTag className="custom-class">test tag</InteractiveTag>
    );
    expect(getByText(/test tag/i)).toHaveClass('custom-class');
  });

  test('should add selected class when `isSelected` is `true`', () => {
    const { getByText } = render(
      <InteractiveTag isSelected>test tag</InteractiveTag>
    );
    expect(getByText(/test tag/i)).toHaveClass(`${namespace}--selected`);
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <InteractiveTag data-testid="test-id">test tag</InteractiveTag>
    );
    expect(queryByTestId('test-id')).toBeInTheDocument();
  });

  test('should invoke remove mock when remove button is clicked', () => {
    const onRemoveMock = jest.fn();
    const { getByLabelText } = render(
      <InteractiveTag
        onRemove={onRemoveMock}
        removable
        removeBtnLabel="test remove button"
      >
        test tag
      </InteractiveTag>
    );

    userEvent.click(getByLabelText(/test remove button/i));
    expect(onRemoveMock).toHaveBeenCalledTimes(1);
  });
});
