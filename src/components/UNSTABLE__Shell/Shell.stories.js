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
import { text } from '@storybook/addon-knobs';

import React from 'react';

import { disableCentered, meta, patterns } from '../../../.storybook';

import {
  Button,
  HeaderAction,
  HeaderActions,
  IconButton,
  Link,
  Nav,
  NavItem,
  NavList,
  NotificationsPopover,
  PopoverFooter,
  PopoverHeader,
  PopoverNotification,
  PopoverTitle,
  ProfilePopover,
  ShellHeader,
  ShellHeaderName,
  ShellReturnToBanner,
  ShellSkipToContent,
  ShellToolbar,
  ToolbarAction,
  UNSTABLE__Shell,
} from '../..';

export const Default = () => (
  <UNSTABLE__Shell>
    <ShellSkipToContent>Skip to content</ShellSkipToContent>

    <ShellReturnToBanner href="#">
      Return to Application / View
    </ShellReturnToBanner>

    <ShellToolbar>
      <ToolbarAction aria-label="Toggle menu" renderIcon={Menu20}>
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
      </ToolbarAction>

      <ToolbarAction aria-label="Toggle settings" renderIcon={Settings20}>
        Action 2
      </ToolbarAction>

      <ToolbarAction aria-label="Toggle help" renderIcon={Help20}>
        Action 3
      </ToolbarAction>
    </ShellToolbar>

    <ShellHeader>
      <ShellHeaderName
        brand={text('`ShellHeaderName` brand (`brand`)', 'Cloud')}
        href="#"
        prefix="IBM"
      >
        {text('`ShellHeaderName` children (`children`)', 'Pak for Security')}
      </ShellHeaderName>

      <HeaderActions>
        <HeaderAction>
          <Button kind="secondary">Action 1</Button>
        </HeaderAction>

        <HeaderAction>
          <Button>Action 2</Button>
        </HeaderAction>

        <HeaderAction
          popover={
            <>
              <PopoverHeader>
                <PopoverTitle>Notifications</PopoverTitle>
              </PopoverHeader>

              <NotificationsPopover onClear={action('onClear')} title="Today">
                <PopoverNotification
                  description="Notification 1"
                  product="Offering 1"
                  viaLabel="via"
                />

                <PopoverNotification
                  description="Notification 2"
                  product="Offering 2"
                  viaLabel="via"
                />

                <PopoverNotification
                  description="Notification 3"
                  product="Offering 3"
                  viaLabel="via"
                />
              </NotificationsPopover>

              <PopoverFooter>
                <Link href="#0">Link 1</Link>

                <Link href="#0">Link 2</Link>
              </PopoverFooter>
            </>
          }
        >
          <IconButton
            aria-label="Toggle notifications"
            renderIcon={Notification20}
          />
        </HeaderAction>

        <HeaderAction
          popover={
            <ProfilePopover name="Simon" surname="Finney">
              <PopoverFooter>
                <Link href="#0">Edit profile</Link>

                <Link href="#0">Sign out</Link>
              </PopoverFooter>
            </ProfilePopover>
          }
        >
          <IconButton aria-label="Toggle profile" renderIcon={User20} />
        </HeaderAction>
      </HeaderActions>
    </ShellHeader>
  </UNSTABLE__Shell>
);

export default meta(
  patterns('UNSTABLE__Shell'),
  'UNSTABLE__Shell',
  disableCentered()
);
