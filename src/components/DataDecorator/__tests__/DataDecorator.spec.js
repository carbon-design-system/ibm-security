/**
 * @file Data decorator tests.
 * @copyright IBM Security 2019
 */

import { mount } from 'enzyme';
import React from 'react';

import { DataDecorator } from '../../..';

import props from '../_mocks_';

describe('DataDecorator', () => {
  let dataDecorator;

  beforeEach(() => {
    dataDecorator = mount(<DataDecorator {...props} />);
  });

  it('renders correctly', () => {
    expect(dataDecorator).toMatchSnapshot();
  });

  it("renders the HTML of the node's subtree", () => {
    expect(dataDecorator.render()).toMatchSnapshot();
  });
});
