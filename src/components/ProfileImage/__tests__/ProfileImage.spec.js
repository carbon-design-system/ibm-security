/**
 * @file Profile image tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { ProfileImage } from '../../..';

import { namespace } from '../ProfileImage';

describe('ProfileImage', () => {
  test('should have no Axe or DAP violations when image is NOT provided', async () => {
    const main = document.createElement('main');
    render(
      <ProfileImage
        profile={{
          image_url: null,
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'ProfileImage without image'
    );
  });

  test('should have no Axe or DAP violations when image is provided', async () => {
    const main = document.createElement('main');
    render(
      <ProfileImage
        profile={{
          image_url: 'example.svg',
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'ProfileImage with image'
    );
  });

  test('should add a custom class', () => {
    const { container } = render(
      <ProfileImage
        data-testid="test-id"
        className="custom-class"
        profile={{
          image_url: null,
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />
    );
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should add correct class when `large` is `true`', () => {
    const { container } = render(
      <ProfileImage
        profile={{
          image_url: null,
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
        large
      />
    );
    expect(container.firstElementChild).toHaveClass(`${namespace}--large`);
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <ProfileImage
        data-testid="test-id"
        profile={{
          image_url: null,
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />
    );
    expect(queryByTestId('test-id')).toBeInTheDocument();
  });
});
