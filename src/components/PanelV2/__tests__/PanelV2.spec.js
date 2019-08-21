/**
 * @file Panel v2 tests.
 * @copyright IBM Security 2019
 */

import { mount } from 'enzyme';
import React from 'react';

import { label, buttons, disabledButtons } from '../_mocks_';

import { PanelV2, PanelV2Content } from '../../..';

const { closeButton, primaryButton, secondaryButton } = buttons;

describe('PanelV2', () => {
  it('renders', () => {
    const wrapper = mount(
      <PanelV2
        title={label}
        subtitle={label}
        closeButton={closeButton}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      >
        <PanelV2Content>{label}</PanelV2Content>
      </PanelV2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled buttons', () => {
    const wrapper = mount(
      <PanelV2
        title={label}
        subtitle={label}
        closeButton={disabledButtons.closeButton}
        primaryButton={disabledButtons.primaryButton}
        secondaryButton={disabledButtons.secondaryButton}
      >
        <PanelV2Content>{label}</PanelV2Content>
      </PanelV2>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
