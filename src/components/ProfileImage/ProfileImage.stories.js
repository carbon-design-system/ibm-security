/**
 * @file Profile image stories.
 * @copyright IBM Security 2019
 */

import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { boolean, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { ProfileImage } from '../..';

import { className, large, profile } from './_mocks_';

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
  ));
