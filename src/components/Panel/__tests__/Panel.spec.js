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
        closeButton={onClick}
        renderFooter={() => (
          <Fragment>
            <Button kind="secondary" onClick={onClick}>
              Close
            </Button>
            <Button onClick={onClick}>Add</Button>
          </Fragment>
        )}
      >
        <PanelContent>{label}</PanelContent>
      </Panel>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
