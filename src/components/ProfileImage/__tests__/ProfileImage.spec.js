/**
 * @file Profile image tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { className, large, profile } from '../_mocks_';

import ProfileImage from '..';

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
});
