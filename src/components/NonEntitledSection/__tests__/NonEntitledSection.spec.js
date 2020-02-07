/**
 * @file Non Entitled Section tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { icon } from '../../_mocks_';
import { NonEntitledSection } from '../../..';

describe('Decorator', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <NonEntitledSection
        title="test title"
        subTitle="test subtitle"
        description="test description"
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
            icon,
          },
        ]}
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('NonEntitledSection');
  });
});
