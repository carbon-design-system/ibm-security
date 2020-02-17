/**
 * @file Type layout tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import {
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutRow,
  TypeLayoutCell,
} from '../../..';

describe('TypeLayout', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <TypeLayout>
        <TypeLayoutBody>
          <TypeLayoutRow>
            <TypeLayoutCell>test cell title 1</TypeLayoutCell>
            <TypeLayoutCell>test cell content 1</TypeLayoutCell>
          </TypeLayoutRow>
          <TypeLayoutRow>
            <TypeLayoutCell>test cell title 2</TypeLayoutCell>
            <TypeLayoutCell>test cell content 2</TypeLayoutCell>
          </TypeLayoutRow>
        </TypeLayoutBody>
      </TypeLayout>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('TypeLayout');
  });

  test('should add a custom class to each component', () => {
    const { getByText } = render(
      <TypeLayout className="custom-layout-class">
        <TypeLayoutBody className="custom-body-class">
          <TypeLayoutRow className="custom-body-class">
            <TypeLayoutCell className="custom-cell-class">
              test cell
            </TypeLayoutCell>
          </TypeLayoutRow>
        </TypeLayoutBody>
      </TypeLayout>
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
      <TypeLayout data-testid="layout-test-id">
        <TypeLayoutBody data-testid="body-test-id">
          <TypeLayoutRow data-testid="row-test-id">
            <TypeLayoutCell data-testid="cell-test-id">
              test cell
            </TypeLayoutCell>
          </TypeLayoutRow>
        </TypeLayoutBody>
      </TypeLayout>
    );
    expect(queryByTestId('layout-test-id')).toBeInTheDocument();
    expect(queryByTestId('body-test-id')).toBeInTheDocument();
    expect(queryByTestId('row-test-id')).toBeInTheDocument();
    expect(queryByTestId('cell-test-id')).toBeInTheDocument();
  });
});
