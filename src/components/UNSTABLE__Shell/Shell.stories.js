/**
 * @file Shell stories.
 * @copyright IBM Security 2020
 */

import Help20 from '@carbon/icons-react/lib/help/20';
import Menu20 from '@carbon/icons-react/lib/menu/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import User20 from '@carbon/icons-react/lib/user/20';
import Settings20 from '@carbon/icons-react/lib/settings/20';

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

const props = {
  skipToContent: () => ({
    children: text(
      '`ShellSkipToContent` children (`children`)',
      'Skip to content'
    ),
    href: '#',
  }),

  returnToBanner: () => ({
    children: text(
      '`ShellReturnToBanner` children (`children`)',
      'Application'
    ),
    view: text('`ShellReturnToBanner` view (`view`)', 'View'),
    href: '#',
  }),

  header: {
    name: () => ({
      children: text('`ShellHeaderName` children (`children`)', 'Application'),
      brand: text('`ShellHeaderName` brand (`brand`)', 'Security'),
      href: '#',
      prefix: 'IBM',
    }),
  },
};

const {
  skipToContent: skipToContentProps,
  returnToBanner: returnToBannerProps,
  header: { name: headerNameProps },
} = props;

export const Default = () => (
  <UNSTABLE__Shell>
    <ShellHeader>
      <ShellHeaderName {...headerNameProps()} />

      <HeaderActions>
        <HeaderAction>
          <Button>Create an account</Button>
        </HeaderAction>

        <HeaderAction>
          <Button kind="secondary">Sign in</Button>
        </HeaderAction>
      </HeaderActions>
    </ShellHeader>
  </UNSTABLE__Shell>
);

export const skipToContent = () => (
  <UNSTABLE__Shell>
    <ShellSkipToContent {...skipToContentProps()} />

    <ShellHeader>
      <ShellHeaderName {...headerNameProps()} />
    </ShellHeader>
  </UNSTABLE__Shell>
);

export const returnToBanner = () => (
  <UNSTABLE__Shell>
    <ShellReturnToBanner {...returnToBannerProps()} />

    <ShellHeader>
      <ShellHeaderName {...headerNameProps()} />
    </ShellHeader>
  </UNSTABLE__Shell>
);

export const toolbar = () => (
  <UNSTABLE__Shell>
    <ShellToolbar>
      <ToolbarAction aria-label="Toggle menu" renderIcon={Menu20}>
        <Nav heading="Heading" label="Navigation">
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
      <ShellHeaderName {...headerNameProps()} />
    </ShellHeader>
  </UNSTABLE__Shell>
);

export const draft = () => (
  <UNSTABLE__Shell>
    <ShellSkipToContent {...skipToContentProps()} />

    <ShellReturnToBanner href="#" view="View">
      Application
    </ShellReturnToBanner>

    <ShellToolbar>
      <ToolbarAction aria-label="Toggle menu" renderIcon={Menu20}>
        <Nav heading="Heading" label="Navigation">
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
      <ShellHeaderName {...headerNameProps()} />

      <HeaderActions>
        <HeaderAction
          popover={
            <>
              <PopoverHeader>
                <PopoverTitle>Notifications</PopoverTitle>
              </PopoverHeader>

              <NotificationsPopover
                iconDescription="Clear notifications"
                title="Today"
              >
                <PopoverNotification
                  description="Notification 1"
                  product="Offering 1"
                  tooltipDirection="bottom"
                  viaLabel="via"
                />

                <PopoverNotification
                  description="Notification 2"
                  product="Offering 2"
                  tooltipDirection="top"
                  viaLabel="via"
                />

                <PopoverNotification
                  description="Notification 3"
                  product="Offering 3"
                  tooltipDirection="top"
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
