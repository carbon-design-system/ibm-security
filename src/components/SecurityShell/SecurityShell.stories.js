/**
 * @file Shell stories.
 * @copyright IBM Security 2020
 */

import Help20 from '@carbon/icons-react/lib/help/20';
import Menu20 from '@carbon/icons-react/lib/menu/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import User20 from '@carbon/icons-react/lib/user/20';
import Settings20 from '@carbon/icons-react/lib/settings/20';
import { action } from '@storybook/addon-actions';

import React from 'react';

import { disableCentered, patterns, meta } from '../../../.storybook';

import {
  Button,
  IconButton,
  Link,
  Nav,
  NavItem,
  NavList,
  SecurityShell,
  SecurityShellHeader,
  SecurityShellHeaderAction,
  SecurityShellHeaderActions,
  SecurityShellHeaderName,
  SecurityShellHeaderPopoverContent,
  SecurityShellHeaderPopoverFooter,
  SecurityShellHeaderPopoverHeader,
  SecurityShellHeaderPopoverNotification,
  SecurityShellHeaderPopoverNotifications,
  SecurityShellReturnToBanner,
  SecurityShellSkipToContent,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
} from '../..';

export const Default = () => (
  <SecurityShell>
    <SecurityShellSkipToContent>Skip to content</SecurityShellSkipToContent>

    <SecurityShellReturnToBanner href="#">
      Return to Application / View
    </SecurityShellReturnToBanner>

    <SecurityShellToolbar>
      <SecurityShellToolbarAction aria-label="Toggle menu" renderIcon={Menu20}>
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
        aria-label="Toggle settings"
        renderIcon={Settings20}
      >
        Action 2
      </SecurityShellToolbarAction>

      <SecurityShellToolbarAction aria-label="Toggle help" renderIcon={Help20}>
        Action 3
      </SecurityShellToolbarAction>
    </SecurityShellToolbar>

    <SecurityShellHeader>
      <SecurityShellHeaderName href="#" offering="Cloud Pak for" prefix="IBM">
        Security
      </SecurityShellHeaderName>

      <SecurityShellHeaderActions>
        <SecurityShellHeaderAction>
          <Button kind="secondary">Action 1</Button>
        </SecurityShellHeaderAction>

        <SecurityShellHeaderAction>
          <Button>Action 2</Button>
        </SecurityShellHeaderAction>

        <SecurityShellHeaderAction
          popover={
            <>
              <SecurityShellHeaderPopoverHeader>
                Notifications
              </SecurityShellHeaderPopoverHeader>

              <SecurityShellHeaderPopoverNotifications
                onClear={action('onClear')}
                title="Today"
              >
                <SecurityShellHeaderPopoverNotification
                  description="Notification 1"
                  product="Offering 1"
                  viaLabel="via"
                />

                <SecurityShellHeaderPopoverNotification
                  description="Notification 2"
                  product="Offering 2"
                  viaLabel="via"
                />

                <SecurityShellHeaderPopoverNotification
                  description="Notification 3"
                  product="Offering 3"
                  viaLabel="via"
                />
              </SecurityShellHeaderPopoverNotifications>

              <SecurityShellHeaderPopoverFooter>
                <Link href="#0">Link 1</Link>

                <Link href="#0">Link 2</Link>
              </SecurityShellHeaderPopoverFooter>
            </>
          }
        >
          <IconButton renderIcon={Notification20} />
        </SecurityShellHeaderAction>

        <SecurityShellHeaderAction
          popover={
            <>
              <SecurityShellHeaderPopoverHeader>
                Profile
              </SecurityShellHeaderPopoverHeader>

              <SecurityShellHeaderPopoverContent>
                SecurityShellHeaderPopoverContent
              </SecurityShellHeaderPopoverContent>

              <SecurityShellHeaderPopoverFooter>
                <Link href="#0">Edit profile</Link>

                <Link href="#0">Sign out</Link>
              </SecurityShellHeaderPopoverFooter>
            </>
          }
        >
          <IconButton renderIcon={User20} />
        </SecurityShellHeaderAction>
      </SecurityShellHeaderActions>
    </SecurityShellHeader>
  </SecurityShell>
);

export default meta(
  patterns('SecurityShell'),
  'SecurityShell',
  disableCentered()
);
