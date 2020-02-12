/**
 * @file Loading message tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { LoadingMessage } from '../../../..';

describe('LoadingMessage', () => {
  test('should have no Axe or DAP violations with overlay', async () => {
    const main = document.createElement('main');
    render(
      <LoadingMessage active withOverlay>
        test message
      </LoadingMessage>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'LoadingMessage with overlay'
    );
  });

  test('should have no Axe or DAP violations without overlay', async () => {
    const main = document.createElement('main');
    render(
      <LoadingMessage active withOverlay={false}>
        test message
      </LoadingMessage>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'LoadingMessage without overlay'
    );
  });

  test('should have no Axe or DAP violations when inactive', async () => {
    const main = document.createElement('main');
    render(<LoadingMessage active={false}>test message</LoadingMessage>, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'LoadingMessage when inactive'
    );
  });

  test('should add custom class', () => {
    const { getByTestId } = render(
      <LoadingMessage data-testid="test-id" className="custom-class" />
    );
    expect(getByTestId('test-id').parentNode).toHaveClass('custom-class');
  });

  test('should pass extra props through spread attribute', () => {
    const { queryByLabelText } = render(
      // `description` provides a custom label
      // to the inner `Loading` component:
      <LoadingMessage description="test description" />
    );
    expect(queryByLabelText('test description')).toBeInTheDocument();
  });

  test('should show a custom loading message after the loading animation', () => {
    const { container, getByLabelText, getByText } = render(
      <LoadingMessage description="test description">
        test message
      </LoadingMessage>
    );
    // Expect the loading animation to appear first:
    expect(container.firstChild).toBe(
      getByLabelText(/test description/i).parentNode
    );
    // Expect the loading message to appear second/last:
    expect(container.lastChild).toBe(getByText(/test message/i));
  });
});
