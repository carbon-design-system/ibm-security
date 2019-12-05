/**
 * @file Panel tests.
 * @copyright IBM Security 2019
 */

import { mount } from 'enzyme';
import React, { Fragment } from 'react';

import { label, onClick } from '../_mocks_';

import { Button, Panel, PanelContent } from '../../..';

describe('Panel', () => {
  it('renders', () => {
    const wrapper = mount(
      <Panel
        title={label}
        subtitle={label}
        closeButton={{ onClick }}
        renderFooter={() => (
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
        )}
      >
        <PanelContent>{label}</PanelContent>
      </Panel>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
