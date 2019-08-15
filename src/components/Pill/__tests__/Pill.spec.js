/**
 * @file Pill tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import Pill from '../';

describe('Pill', () => {
  let pill;

  beforeEach(() => {
    pill = shallow(<Pill value="127.0.0.1" type="IP" />);
  });

  it('renders correctly', () => {
    expect(pill).toMatchSnapshot();
  });
});
