/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React, { Fragment } from 'react';
import { ArrowRight20 } from '@carbon/icons-react';

import ComboButton, { ComboButtonItem } from '../';

describe('ComboButton', () => {
  it('renders a combo button without an overflow menu', () => {
    const comboButton = shallow(
      <ComboButton
        primaryAction={{
          label: 'Start a task',
          renderIcon: ArrowRight20,
          onClick: () => {},
        }}
      />
    );

    expect(comboButton).toMatchSnapshot();
    expect(comboButton.find('[menuOptionsClass]').exists()).toEqual(false);
  });

  it('renders a combo button with children and an overflow menu', () => {
    const comboButton = shallow(
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
              <span>Filter list</span>
            </Fragment>
          }
        />
      </ComboButton>
    );

    expect(comboButton).toMatchSnapshot();
    expect(comboButton.render()).toMatchSnapshot();
    expect(comboButton.find('[menuOptionsClass]').exists()).toEqual(true);
  });
});
