/**
 * @file Profile image stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { boolean, object } from '@storybook/addon-knobs';

import { components } from '../../../.storybook';

import { ProfileImage } from '../..';

import { className, large, profile, profileWithImage } from './_mocks_';

const profileImageProps = () => ({
  className,
  large: boolean('Large (large)', large),
});

storiesOf(components('ProfileImage'), module)
  .addDecorator(checkA11y)
  .addDecorator(centered)
  .add('default', () => (
    <ProfileImage
      {...profileImageProps()}
      profile={object('Profile (profile)', profile)}
    />
  ))
  .add(
    'with image',
    () => (
      <ProfileImage
        {...profileImageProps()}
        profile={object('Profile (profile)', profileWithImage)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of a Profile Image component with an image.
        `,
      },
    }
  );
