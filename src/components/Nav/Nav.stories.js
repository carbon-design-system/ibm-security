/**
 * @file Navigation stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { components } from '../../../.storybook';
import { Nav, NavItem, NavList } from '../..';

storiesOf(components('Nav'), module)
  .addDecorator(withA11y)
  .add(
    'default',
    () => (
      <Nav heading="Nav example" label="Nav">
        <NavList title="Nav list 1">
          <NavItem key="navitem_1-1" element="span" customprop="uniqueValue">
            Nav item 1-1 (with a custom element)
          </NavItem>
          <NavItem key="navitem_1-2" href="#navitem_1-2">
            Nav item 1-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 2 expanded on page load" isExpandedOnPageload>
          <NavItem key="navitem_2-1" href="#navitem_2-1">
            Nav item 2-1
          </NavItem>
          <NavItem key="navitem_2-2" href="#navitem_2-2">
            Nav item 2-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 3">
          <NavItem key="navitem_3-1" href="#navitem_3-1">
            Nav item 3-1
          </NavItem>
          <NavItem key="navitem_3-2" href="#navitem_3-2">
            Nav item 3-2
          </NavItem>
        </NavList>
      </Nav>
    ),
    {
      info: {
        text: `
          Basic implementation of a Nav component.
        `,
      },
    }
  );
