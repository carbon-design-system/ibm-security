/**
 * @file String formatter tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { StringFormatter } from '../../..';

import props from '../_mocks_';

describe('StringFormatter', () => {
  let stringFormatter;

  beforeEach(() => {
    stringFormatter = shallow(<StringFormatter {...props} />);
  });

  it('renders', () => {
    expect(stringFormatter).toMatchSnapshot();
  });

  it('renders the truncation variation', () => {
    stringFormatter.setProps({ truncate: true });

    expect(stringFormatter).toMatchSnapshot();
  });
});
