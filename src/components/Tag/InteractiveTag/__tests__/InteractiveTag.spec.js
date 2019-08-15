/**
 * @file Interactive tag tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { label } from '../../../_mocks_';

import { InteractiveTag } from '../../../..';

import { namespace } from '../InteractiveTag';

describe('InteractiveTag', () => {
  const onRemove = jest.fn();

  let interactiveTag;

  beforeEach(() => {
    interactiveTag = shallow(
      <InteractiveTag type="gray" onRemove={onRemove} removable>
        {label}
      </InteractiveTag>
    );
  });

  describe('Rendering', () => {
    it('renders correctly', () => {
      expect(interactiveTag).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(interactiveTag.render()).toMatchSnapshot();
    });

    it('renders the selected variation correctly', () => {
      interactiveTag.setProps({ isSelected: true });
      expect(interactiveTag).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should invoke the `onRemove` method when the button is selected', () => {
      interactiveTag.find(`.${namespace}__button`).simulate('click');
      expect(onRemove).toBeCalled();
    });
  });
});
