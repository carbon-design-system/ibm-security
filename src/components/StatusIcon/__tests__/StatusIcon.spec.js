/**
 * @file Status icon tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import StatusIcon, { STATUS, SIZE } from '../StatusIcon';

describe('StatusIcon', () => {
  let statusIcon;

  beforeEach(() => {
    statusIcon = shallow(<StatusIcon />);
  });

  it('renders', () => {
    expect(statusIcon).toMatchSnapshot();
  });

  SIZE.forEach(size =>
    it(`renders the '${size}' variation`, () => {
      statusIcon.setProps({ size });

      expect(statusIcon).toMatchSnapshot();
    })
  );

  STATUS.forEach(status =>
    it(`renders the '${status}' variation`, () => {
      statusIcon.setProps({ message: status, status });

      expect(statusIcon).toMatchSnapshot();
    })
  );
});
