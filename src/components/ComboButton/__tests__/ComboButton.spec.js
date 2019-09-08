/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { Filter20 } from '@carbon/icons-react';

import ComboButton from '../';
import ComboButtonItem from '../../ComboButtonItem';

import primaryAction from '../_mocks_';

describe('ComboButton', () => {
  let comboButton;

  beforeEach(() => {
    comboButton = shallow(
      <ComboButton primaryAction={primaryAction}>
        <ComboButtonItem
          className="some-class"
          itemText={
            <Fragment>
              <span>Filter list 1</span>
              <Filter20 />
            </Fragment>
          }
        />
        <ComboButtonItem
          className="some-class"
          itemText={
            <Fragment>
              <span>Filter list 2</span>
            </Fragment>
          }
        />
      </ComboButton>
    );
  });

  it('renders', () => {
    expect(comboButton).toMatchSnapshot();
  });

  it("renders the HTML of the node's subtree", () => {
    expect(comboButton.render()).toMatchSnapshot();
  });
});
