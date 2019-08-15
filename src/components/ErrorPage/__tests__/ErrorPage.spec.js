/**
 * @file ErrorPage Section tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';
import ErrorPage from '../ErrorPage';

describe('ErrorPage', () => {
  let errorPage;

  beforeEach(() => {
    errorPage = shallow(
      <ErrorPage
        statusCode={404}
        links={[{ id: 'link-example-id', href: '#', text: 'Return to ...' }]}
      />
    );
  });

  describe('render', () => {
    it('renders correctly', () => {
      expect(errorPage).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(errorPage.render()).toMatchSnapshot();
    });
  });
});
