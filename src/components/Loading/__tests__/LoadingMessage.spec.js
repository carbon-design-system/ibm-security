/**
 * @file Loading tests.
 * @copyright IBM Security 2018
 */

import { shallow } from 'enzyme';
import React from 'react';

import { LoadingMessage } from '../';

describe('LoadingMessage', () => {
  let loading;

  beforeEach(() => {
    loading = shallow(
      <LoadingMessage active className="" withOverlay small={false} />
    );
  });

  it('renders correctly', () => expect(loading).toMatchSnapshot());

  it('renders active=false correctly', () => {
    loading.setProps({ active: false });
    expect(loading).toMatchSnapshot();
  });

  it('renders withOverlay=false correctly', () => {
    loading.setProps({ withOverlay: false });
    expect(loading).toMatchSnapshot();
  });
});
