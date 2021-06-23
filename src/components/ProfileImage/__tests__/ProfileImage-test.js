/**
 * @file Profile image tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { ProfileImage } from '../../..';

import { namespace } from '../ProfileImage';

describe('ProfileImage', () => {
  test('should have no Axe or DAP violations when image is NOT provided', async () => {
    const { container } = renderWithinLandmark(
      <ProfileImage
        profile={{
          image_url: null,
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('ProfileImage without image');
  });

  test('should have no Axe or DAP violations when image is provided', async () => {
    const { container } = renderWithinLandmark(
      <ProfileImage
        profile={{
          image_url: 'example.svg',
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('ProfileImage with image');
  });

  test("should apply an image via the `profile` object's `image_url`", () => {
    render(
      <ProfileImage
        profile={{
          image_url: 'test-image',
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />
    );
    expect(document.querySelector(`[src='test-image']`)).toBeVisible();
  });

  test("should use initials from `profile` object's `first_name` and `surname` when `image_url` is not provided", () => {
    const { queryByText } = render(
      <ProfileImage
        profile={{
          image_url: null,
          name: {
            first_name: 'Test',
            surname: 'User',
          },
        }}
      />
    );
    // "TU" are initials of "Test User"
    expect(queryByText('TU')).toBeVisible();
  });

  test('should add a custom class', () => {
    render(
      <ProfileImage
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
    expect(document.querySelector('.custom-class')).toBeVisible();
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
