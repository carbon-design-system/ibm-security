/**
 * @file Decorator tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { Decorator } from '../../../..';

import props from '../../_mocks_';

describe('Decorator', () => {
  let decorator;

  beforeEach(() => {
    decorator = shallow(<Decorator {...props} />);
  });

  it('renders correctly', () => {
    expect(decorator).toMatchSnapshot();
  });

  it("renders the HTML of the node's subtree", () => {
    expect(decorator.render()).toMatchSnapshot();
  });

  it('renders the `inert` variation', () => {
    decorator.setProps({ inert: true });

    expect(decorator).toMatchSnapshot();
  });
});
