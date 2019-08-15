/**
 * @file Data decorator tests.
 * @copyright IBM Security 2019
 */

import { mount } from 'enzyme';
import React from 'react';

import { DataDecorator } from '../../..';
import { namespace } from '../Decorator/constants';

import props from '../_mocks_';

describe('DataDecorator', () => {
  let dataDecorator;
  let onOpen;

  beforeEach(() => {
    onOpen = jest.fn();

    dataDecorator = mount(<DataDecorator {...props} onOpen={onOpen} />);
  });

  describe('Rendering', () => {
    it('renders correctly', () => {
      expect(dataDecorator).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(dataDecorator.render()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call `onOpen` when selected', () => {
      dataDecorator.find(`.${namespace}`).simulate('click');
      expect(onOpen).toBeCalled();
    });
  });
});
