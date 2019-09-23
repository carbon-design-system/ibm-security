/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import ArrowRight20 from '@carbon/icons-react/lib/arrow--right/20';

import ComboButton, { ComboButtonItem } from '../';

describe('ComboButton', () => {
  it('renders a combo button without an overflow menu', () => {
    const comboButton = shallow(
      <ComboButton>
        <ComboButtonItem renderIcon={ArrowRight20}>
          Start a task
        </ComboButtonItem>
      </ComboButton>
    );

    expect(comboButton).toMatchSnapshot();
    expect(comboButton.find('OverflowMenu').exists()).toEqual(false);
  });

  it('renders a combo button with children and an overflow menu', () => {
    const comboButton = mount(
      <ComboButton>
        <ComboButtonItem renderIcon={ArrowRight20}>
          Start a task
        </ComboButtonItem>
        <ComboButtonItem>Filter list</ComboButtonItem>
      </ComboButton>
    );

    comboButton
      .find('OverflowMenu')
      .instance()
      .setState({ open: true });
    comboButton.update();

    expect(comboButton.find('OverflowMenu').exists()).toEqual(true);
    expect(comboButton).toMatchSnapshot();
  });
});
