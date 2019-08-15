/**
 * @file Portal tests.
 * @copyright IBM Security 2018
 */

import { mount, shallow } from 'enzyme';
import React from 'react';

import { className, label } from '../../_mocks_';

import Portal from '../';

describe('Portal', () => {
  let portal;

  beforeEach(() => {
    portal = (
      <Portal className={className} title={label}>
        <div>
          <button>TEST</button>
        </div>
      </Portal>
    );
  });

  it('renders correctly', () => {
    expect(mount(portal)).toMatchSnapshot();
  });

  it("doesn't render", () => {
    expect(shallow(portal)).toMatchSnapshot();
  });
});
