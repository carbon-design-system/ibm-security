/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { ArrowRight20 , Filter20 } from '@carbon/icons-react';


import ComboButton from '../';
import ComboButtonItem from '../ComboButtonItem';

describe('ComboButton', () => {
  let comboButton;

  beforeEach(() => {
    comboButton = shallow(
      <ComboButton
        primaryAction={{
          label: 'Start a task',
          renderIcon: ArrowRight20,
          onClick: () => {},
        }}
      >
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
