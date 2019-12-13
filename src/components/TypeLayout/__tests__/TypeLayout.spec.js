/**
 * @file Type layout tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { shallow } from 'enzyme';

import { TypeLayout, TypeLayoutBody, TypeLayoutRow, TypeLayoutCell } from '../';

import rows from '../_mocks_';

describe('TypeLayout', () => {
  let typeLayout;

  beforeEach(() => {
    typeLayout = shallow(
      <TypeLayout>
        <TypeLayoutBody>
          {rows.map(row => {
            const { id, title, description } = row;

            return (
              <TypeLayoutRow key={id}>
                <TypeLayoutCell>{title}</TypeLayoutCell>
                <TypeLayoutCell>
                  <ul>
                    <li>{description}</li>
                    <li>{description}</li>
                    <li>{description}</li>
                  </ul>
                </TypeLayoutCell>
              </TypeLayoutRow>
            );
          })}
        </TypeLayoutBody>
      </TypeLayout>
    );
  });

  describe('render', () => {
    it('renders correctly', () => {
      expect(typeLayout).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(typeLayout.render()).toMatchSnapshot();
    });

    it('renders correct classes if `size` or `border` are set', () => {
      typeLayout.setProps({ size: 'sm', border: true });
      expect(typeLayout.render()).toMatchSnapshot();
    });
  });
});
