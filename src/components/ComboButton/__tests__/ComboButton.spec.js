/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */
/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import ComboButton from '../';

import actions from '../_mocks_';

describe('ComboButton', () => {
  let comboButton;

  beforeEach(() => {
    comboButton = shallow(<ComboButton actions={actions} />);
  });

  it('renders', () => {
    expect(comboButton).toMatchSnapshot();
  });

  it("renders the HTML of the node's subtree", () => {
    expect(comboButton.render()).toMatchSnapshot();
  });
});
