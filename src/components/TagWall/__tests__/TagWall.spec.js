/**
 * @file Tag wall tests.
 * @copyright IBM Security 2019
 */

import { mount } from 'enzyme';
import React from 'react';

import { Button, InteractiveTag, TagWall } from '../../..';

import { type } from '../TagWall';
import { namespace as interactiveTagNamespace } from '../../Tag/InteractiveTag/InteractiveTag';

import props from '../_mocks_';

describe('TagWall', () => {
  let tagWall;

  beforeEach(() => {
    tagWall = mount(<TagWall {...props} />);
  });

  describe('Rendering', () => {
    it('renders', () => {
      expect(tagWall).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(tagWall.render()).toMatchSnapshot();
    });

    it('renders the disabled variation', () => {
      tagWall.setProps({ disable: true });

      expect(tagWall).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    const { fn } = jest;

    // Get the "close" button:
    const getButton = () =>
      tagWall
        .find(InteractiveTag)
        .first()
        .find(`button.${interactiveTagNamespace}__button`);

    it('should call the `onChange` method', () => {
      const onChange = fn();
      tagWall.setProps({ onChange });

      getButton().simulate('click');
      expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ type }));
    });

    it('should stop propagation when the `onChange` method is called', () => {
      const stopPropagation = fn();

      getButton().simulate('click', { stopPropagation });
      expect(stopPropagation).toHaveBeenCalled();
    });

    it('should call the `onAddButton` method', () => {
      const onAddButton = fn();
      tagWall.setProps({ onAddButton });

      tagWall.find(Button).simulate('click');
      expect(onAddButton).toHaveBeenCalled();
    });
  });
});
