/**
 * @file Description list tests.
 * @copyright IBM Security 2019 - 2020
 */

import { render } from '@testing-library/react';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import {
  DescriptionList,
  DescriptionListBody,
  DescriptionListCell,
  DescriptionListRow,
} from '../../..';

import { namespace } from '../DescriptionList';

const sizes = ['xs', 'sm', 'md', 'lg'];

describe('DescriptionList', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <DescriptionList>
        <DescriptionListBody>
          <DescriptionListRow>
            <DescriptionListCell>test cell title 1</DescriptionListCell>
            <DescriptionListCell>test cell content 1</DescriptionListCell>
          </DescriptionListRow>
          <DescriptionListRow>
            <DescriptionListCell>test cell title 2</DescriptionListCell>
            <DescriptionListCell>test cell content 2</DescriptionListCell>
          </DescriptionListRow>
        </DescriptionListBody>
      </DescriptionList>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('DescriptionList');
  });

  test('should add a custom class to each component', () => {
    const { getByText } = render(
      <DescriptionList className="custom-layout-class">
        <DescriptionListBody className="custom-body-class">
          <DescriptionListRow className="custom-row-class">
            <DescriptionListCell className="custom-cell-class">
              test cell
            </DescriptionListCell>
          </DescriptionListRow>
        </DescriptionListBody>
      </DescriptionList>
    );
    const cell = getByText(/test cell/i);
    expect(cell).toHaveClass('custom-cell-class');
    // Row class:
    expect(cell.parentNode).toHaveClass('custom-row-class');
    // Body class:
    expect(cell.parentNode.parentNode).toHaveClass('custom-body-class');
    // Layout wrapper class:
    expect(cell.parentNode.parentNode.parentNode).toHaveClass(
      'custom-layout-class'
    );
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <DescriptionList data-testid="layout-test-id">
        <DescriptionListBody data-testid="body-test-id">
          <DescriptionListRow data-testid="row-test-id">
            <DescriptionListCell data-testid="cell-test-id">
              test cell
            </DescriptionListCell>
          </DescriptionListRow>
        </DescriptionListBody>
      </DescriptionList>
    );
    expect(queryByTestId('layout-test-id')).toBeInTheDocument();
    expect(queryByTestId('body-test-id')).toBeInTheDocument();
    expect(queryByTestId('row-test-id')).toBeInTheDocument();
    expect(queryByTestId('cell-test-id')).toBeInTheDocument();
  });

  test('should apply `children` for each component', () => {
    const { queryByTestId } = render(
      <DescriptionList data-testid="layout-test-id">
        <DescriptionListBody data-testid="body-test-id">
          <DescriptionListRow data-testid="row-test-id">
            <DescriptionListCell data-testid="cell-test-id">
              test cell
            </DescriptionListCell>
          </DescriptionListRow>
        </DescriptionListBody>
      </DescriptionList>
    );
    expect(queryByTestId('layout-test-id').hasChildNodes).toBeTruthy();
    expect(queryByTestId('body-test-id').hasChildNodes).toBeTruthy();
    expect(queryByTestId('row-test-id').hasChildNodes).toBeTruthy();
    expect(queryByTestId('cell-test-id').hasChildNodes).toBeTruthy();
  });

  test('should apply correct class when `border` is `true`', () => {
    const { container } = render(
      <DescriptionList data-testid="test-id" border />
    );
    expect(container.firstElementChild).toHaveClass(`${namespace}--bordered`);
  });

  sizes.forEach(size =>
    test(`should apply correct class when \`size\` is set to '${size}'`, () => {
      const { container } = render(<DescriptionList size={size} />);
      expect(container.firstElementChild).toHaveClass(`${namespace}--${size}`);
    })
  );
});
