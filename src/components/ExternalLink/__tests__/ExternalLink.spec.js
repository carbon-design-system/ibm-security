/**
 * @file External link tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { ExternalLink } from '../../..';

import props from '../_mocks_';

describe('ExternalLink', () => {
  describe('Rendering', () => {
    const externalLink = shallow(
      <ExternalLink {...props}>{props.href}</ExternalLink>
    );

    it('renders correctly', () => {
      expect(externalLink).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(externalLink.render()).toMatchSnapshot();
    });
  });
});
