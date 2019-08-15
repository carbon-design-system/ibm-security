/**
 * @file Non Entitled Section tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';
import NonEntitledSection from '../NonEntitledSection';

import { noSubscriptionExample } from '../_mocks_';

describe('NonEntitledSection', () => {
  let nonEntitledSection;

  beforeEach(() => {
    nonEntitledSection = shallow(
      <NonEntitledSection {...noSubscriptionExample} />
    );
  });

  describe('render', () => {
    it('renders correctly', () => {
      expect(nonEntitledSection).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(nonEntitledSection.render()).toMatchSnapshot();
    });
  });
});
