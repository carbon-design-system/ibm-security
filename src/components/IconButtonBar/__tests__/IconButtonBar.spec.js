/**
 * @file IconButtonBar tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';
import Add16 from '@carbon/icons-react/lib/add/16';
import Edit16 from '@carbon/icons-react/lib/edit/16';
import Locked16 from '@carbon/icons-react/lib/locked/16';
import Notification16 from '@carbon/icons-react/lib/notification/16';

import { IconButtonBar } from '../../..';
import {
  className,
  iconClassName,
  label,
  sizes,
} from '../../IconButton/_mocks_';

const actions = [
  {
    className,
    disabled: false,
    iconClassName,
    label: `${label} 1`,
    onClick: () => {},
    renderIcon: Add16,
  },
  {
    className,
    disabled: false,
    iconClassName,
    label: `${label} 2`,
    onClick: () => {},
    renderIcon: Edit16,
  },
  {
    className,
    disabled: false,
    iconClassName,
    label: `${label} 3`,
    onClick: () => {},
    renderIcon: Locked16,
  },
  {
    className,
    disabled: false,
    iconClassName,
    label: `${label} 4`,
    onClick: () => {},
    renderIcon: Notification16,
  },
];

let iconButtonBar;

beforeEach(() => {
  iconButtonBar = shallow(<IconButtonBar actions={actions} />);
});

describe('IconButtonBar', () => {
  sizes.forEach(size => {
    it(`renders the '${size}' variation`, () => {
      iconButtonBar.setProps({ size });
      expect(iconButtonBar).toMatchSnapshot();
    });
  });

  [1, 2, 3, 4, 5].forEach(length => {
    it(`renders the length of '${length}' variation`, () => {
      iconButtonBar.setProps({ length });
      expect(iconButtonBar).toMatchSnapshot();
    });
  });
});
