/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';
import ArrowRight20 from '@carbon/icons-react/lib/arrow--right/20';

import ComboButton, { ComboButtonItem } from '../';

describe('ComboButton', () => {
  it('renders a combo button without an overflow menu', () => {
    const comboButton = shallow(
      <ComboButton>
        <ComboButtonItem className="some-class" renderIcon={ArrowRight20}>
          Start a task
        </ComboButtonItem>
      </ComboButton>
    );

    expect(comboButton.render()).toMatchSnapshot();
    expect(comboButton.find('[menuOptionsClass]').exists()).toEqual(false);
  });

  it('renders a combo button with children and an overflow menu', () => {
    const comboButton = shallow(
      <ComboButton>
        <ComboButtonItem className="some-class" renderIcon={ArrowRight20}>
          Start a task
        </ComboButtonItem>
        <ComboButtonItem className="some-class">
          <span>Filter list</span>
        </ComboButtonItem>
      </ComboButton>
    );

    expect(comboButton.render()).toMatchSnapshot();
    expect(comboButton.find('[menuOptionsClass]').exists()).toEqual(true);
  });
});
