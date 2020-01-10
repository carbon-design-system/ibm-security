/**
 * @file Shell tests.
 * @copyright IBM Security 2020
 */

import { mount } from 'enzyme';
import React from 'react';

import { SecurityHeader, Shell, Toolbar } from '../../..';

import { namespace } from '../Shell';
import { header, profile, toolbar } from '../_mocks_';

describe('Shell', () => {
  const shell = mount(<Shell header={header} toolbar={toolbar} />);
  const getElement = element => shell.find(element);
  const getToolbar = () => shell.find(Toolbar);

  describe('Rendering', () => {
    const activeClass = `${namespace}--active`;
    const headerNamespace = '__header';

    const hasHeaderClass = (className = `${activeClass}${headerNamespace}`) =>
      getElement(SecurityHeader).hasClass(className);

    it('should render the toolbar when a user is logged in', () => {
      const doesToolbarExist = () => getToolbar().exists();

      expect(doesToolbarExist()).toEqual(false);
      expect(shell.hasClass(activeClass)).toEqual(false);
      expect(hasHeaderClass()).toEqual(false);

      shell.setProps({ profile });

      expect(doesToolbarExist()).toEqual(true);
    });

    it('should render the correct classes when a user is logged in', () => {
      expect(hasHeaderClass()).toEqual(true);
    });
  });
});
