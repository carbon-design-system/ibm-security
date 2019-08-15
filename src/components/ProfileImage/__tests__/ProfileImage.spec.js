/**
 * @file Profile image tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { className, large, profile, profileWithImage } from '../_mocks_';

import ProfileImage from '../';

describe('ProfileImage', () => {
  let profileImage;

  beforeEach(() => {
    profileImage = shallow(
      <ProfileImage className={className} profile={profile} />
    );
  });

  it('renders', () => {
    expect(profileImage).toMatchSnapshot();
  });

  it('renders the large variation', () => {
    profileImage.setProps({ large });
    expect(profileImage.render()).toMatchSnapshot();
  });

  it('renders an image', () => {
    profileImage.setProps({
      profile: profileWithImage,
    });

    expect(profileImage).toMatchSnapshot();
  });

  it('renders the large variation with an image', () => {
    profileImage.setProps({
      large,
      profile: profileWithImage,
    });

    expect(profileImage).toMatchSnapshot();
  });
});
