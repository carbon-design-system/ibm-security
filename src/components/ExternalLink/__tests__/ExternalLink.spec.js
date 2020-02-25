/**
 * @file External link tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ExternalLink } from '../../../..';

describe('ExternalLink', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <ExternalLink href="https://www.ibm.com/security">
        test link
      </ExternalLink>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('ExternalLink');
  });

  test('should add children as link text', () => {
    const { queryByText } = render(
      <ExternalLink href="https://www.ibm.com/security">test link</ExternalLink>
    );
    expect(queryByText(/test link/i)).toBeVisible();
  });

  test('should add an href', () => {
    const { getByText } = render(
      <ExternalLink href="https://www.ibm.com/security">test link</ExternalLink>
    );
    expect(getByText(/test link/i).closest('a')).toHaveAttribute(
      'href',
      'https://www.ibm.com/security'
    );
  });

  test('should add custom class', () => {
    const { getByText } = render(
      <ExternalLink
        href="https://www.ibm.com/security"
        className="custom-class"
      >
        test link
      </ExternalLink>
    );
    expect(getByText(/test link/i).closest('a')).toHaveClass('custom-class');
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <ExternalLink href="https://www.ibm.com/security" data-testid="test-id">
        test link
      </ExternalLink>
    );
    expect(queryByTestId('test-id')).toBeInTheDocument();
  });
});
