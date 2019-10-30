/**
 * @file String formatter tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { StringFormatter } from '../../..';
import value from '../_mocks_';

describe('StringFormatter', () => {
  let stringFormatter;

  beforeEach(() => {
    stringFormatter = shallow(<StringFormatter value={value} />);
  });

  it('renders', () => {
    expect(stringFormatter).toMatchSnapshot();
  });

  it('renders the truncated variation', () => {
    stringFormatter.setProps({ truncate: true });

    expect(stringFormatter).toMatchSnapshot();
  });

  it('renders the correct amount of lines', () => {
    stringFormatter.setProps({ truncate: true, lines: 4 });
    expect(stringFormatter.find('span').prop('style')).toHaveProperty(
      'WebkitLineClamp',
      4
    );
  });
});
