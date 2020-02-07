/**
 * @file ErrorPage Section tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ErrorPage } from '../../..';

describe('ErrorPage', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <ErrorPage
        statusCode={404}
        title="test title"
        errorName="test error name"
        errorMessage="test error mesage"
        links={[
          {
            id: 'test-link-1',
            text: 'test link 1',
            href: '#',
          },
          {
            id: 'test-link-2',
            text: 'test link 2',
            href: '#',
          },
        ]}
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('ErrorPage');
  });

  test('should accept a custom class', () => {
    const { getByTestId } = render(
      <ErrorPage
        statusCode={404}
        data-testid="test-id"
        className="custom-class"
      />
    );
    expect(getByTestId('test-id')).toHaveClass('custom-class');
  });
});
