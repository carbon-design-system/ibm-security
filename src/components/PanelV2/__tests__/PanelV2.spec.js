/**
 * @file Panel v2 tests.
 * @copyright IBM Security 2019
 */

import { mount } from 'enzyme';
import React, { Fragment } from 'react';

import { label, onClick } from '../_mocks_';

import { Button, PanelV2, PanelV2Content } from '../../..';

describe('PanelV2', () => {
  it('renders', () => {
    const wrapper = mount(
      <PanelV2
        title={label}
        subtitle={label}
        closeButton={{ onClick }}
        footer={
          <Fragment>
            <Button
              id="example-secondary-button"
              kind="secondary"
              onClick={onClick}
            >
              Close
            </Button>
            <Button id="example-primary-button" onClick={onClick}>
              Add
            </Button>
          </Fragment>
        }
      >
        <PanelV2Content>{label}</PanelV2Content>
      </PanelV2>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
