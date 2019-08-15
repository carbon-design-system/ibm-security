/**
 * @file Step indicator tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { shallow } from 'enzyme';

import { Step, StepIndicator } from '../';

describe('StepIndicator', () => {
  let list;

  beforeEach(() => {
    list = shallow(
      <StepIndicator currentIndex={1}>
        <Step
          label="First step"
          description="Step 1: Getting started with Carbon Design System"
        />
        <Step
          label="Second step"
          description="Step 2: Getting started with Carbon Design System"
        />
      </StepIndicator>
    );
  });

  describe('render', () => {
    it('renders correctly', () => {
      expect(list).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(list.render()).toMatchSnapshot();
    });

    it('renders if `currentIndex` is null', () => {
      list.setProps({ currentIndex: null });
      expect(list.render()).toMatchSnapshot();
    });
  });
});
