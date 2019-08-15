/**
 * @file Stacked notification tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { iconDescription, title, subtitle } from '../_mocks_';

import StackedNotification from '../';

describe('StackedNotification', () => {
  let stackedNotification;

  beforeEach(() => {
    stackedNotification = shallow(
      <StackedNotification
        iconDescription={iconDescription}
        title={title}
        subtitle={subtitle}
      />
    );
  });

  describe('render', () => {
    it('renders correctly', () => {
      expect(stackedNotification).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(stackedNotification.render()).toMatchSnapshot();
    });
  });
});
