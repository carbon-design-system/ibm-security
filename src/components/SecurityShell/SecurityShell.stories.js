/**
 * @file Shell stories.
 * @copyright IBM Security 2019
 */

import Help20 from '@carbon/icons-react/lib/help/20';
import Menu20 from '@carbon/icons-react/lib/menu/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import Settings20 from '@carbon/icons-react/lib/settings/20';

import React from 'react';

import { disableCentered, patterns, meta } from '../../../.storybook';

import {
  Button,
  IconButton,
  Nav,
  NavItem,
  NavList,
  SecurityShell,
  SecurityShellHeader,
  SecurityShellHeaderAction,
  SecurityShellHeaderActions,
  SecurityShellHeaderName,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
} from '../..';

export const Default = () => (
  <SecurityShell>
    <SecurityShellToolbar>
      {({ isActive, setIsActive }) => (
        <>
          <SecurityShellToolbarAction
            id="0"
            aria-label="Toggle menu"
            isActive={isActive}
            onClick={setIsActive}
            renderIcon={Menu20}
          >
            <Nav heading="Heading">
              <NavList title="List">
                <NavItem>Item 1</NavItem>
                <NavItem>Item 2</NavItem>
              </NavList>
              <NavItem>Item 3</NavItem>
            </Nav>

            <Nav>
              <NavItem>Item 4</NavItem>
              <NavItem>Item 5</NavItem>
            </Nav>
          </SecurityShellToolbarAction>
          <SecurityShellToolbarAction
            id="1"
            aria-label="Toggle settings"
            isActive={isActive}
            onClick={setIsActive}
            renderIcon={Settings20}
          >
            Action 2
          </SecurityShellToolbarAction>
          <SecurityShellToolbarAction
            id="2"
            aria-label="Toggle help"
            isActive={isActive}
            onClick={setIsActive}
            renderIcon={Help20}
          >
            Action 3
          </SecurityShellToolbarAction>
        </>
      )}
    </SecurityShellToolbar>

    <SecurityShellHeader>
      <SecurityShellHeaderName href="#" offering="Cloud Pak for" prefix="IBM">
        Security
      </SecurityShellHeaderName>

      <SecurityShellHeaderActions>
        {({ isActive, setIsActive }) => (
          <>
            <SecurityShellHeaderAction>
              <Button kind="secondary">Action 1</Button>
            </SecurityShellHeaderAction>
            <SecurityShellHeaderAction>
              <Button>Action 2</Button>
            </SecurityShellHeaderAction>
            <SecurityShellHeaderAction
              id="3"
              isActive={isActive}
              popover="Action 3"
            >
              <IconButton
                id="3"
                onClick={setIsActive}
                renderIcon={Notification20}
                state={isActive}
              />
            </SecurityShellHeaderAction>
          </>
        )}
      </SecurityShellHeaderActions>
    </SecurityShellHeader>
  </SecurityShell>
);

export default meta(
  patterns('SecurityShell'),
  'SecurityShell',
  disableCentered()
);
