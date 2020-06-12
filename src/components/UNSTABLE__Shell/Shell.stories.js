/**
 * @file Shell stories.
 * @copyright IBM Security 2020
 */

import { layout01 } from '@carbon/layout';

import Help20 from '@carbon/icons-react/lib/help/20';
import Menu20 from '@carbon/icons-react/lib/menu/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import User20 from '@carbon/icons-react/lib/user/20';
import Settings20 from '@carbon/icons-react/lib/settings/20';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

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
  PopoverAccount,
  PopoverAccountItem,
  PopoverAccountList,
  PopoverFooter,
  PopoverNotification,
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
  name: () => ({
    children: text('`ShellHeaderName` children (`children`)', 'Application'),
    brand: text('`ShellHeaderName` brand (`brand`)', 'Security'),
    href: '#',
    prefix: 'IBM',
  }),

  profile: {
    props: () => ({ labelText: 'Profile' }),

    popover: () => ({
      name: text('`ProfilePopover` name (`name`)', 'Sample'),
      surname: text('`ProfilePopover` surname (`surname`)', 'User'),
    }),
  },

  account: () => ({
    children: text('`PopoverAccount` children (`children`)', 'Account 1'),
    account: text('`PopoverAccount` account (`account`)', 'Account 1'),
    id: text('`PopoverAccount` identifier (`id`)', 'Account 1'),
  }),
};

const {
  account: accountProps,
  name: nameProps,
  profile: { props: profileProps, popover: profilePopoverProps },
} = props;

const Default = () => (
  <UNSTABLE__Shell>
    <ShellHeader>
      <ShellHeaderName {...nameProps()} />

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

const skipToContent = () => (
  <>
    <UNSTABLE__Shell>
      <ShellSkipToContent href="#content" labelText="Skip to content">
        {text('`ShellSkipToContent` children (`children`)', 'Skip to content')}
      </ShellSkipToContent>

      <ShellHeader>
        <ShellHeaderName {...nameProps()} />

        <HeaderActions>
          <HeaderAction>
            <Button kind="secondary">Action</Button>
          </HeaderAction>
        </HeaderActions>
      </ShellHeader>
    </UNSTABLE__Shell>

    <main style={{ margin: layout01 }}>
      <Button id="content">Content</Button>
    </main>
  </>
);

const returnToBanner = () => (
  <UNSTABLE__Shell>
    <ShellReturnToBanner
      href="#"
      view={text('`ShellReturnToBanner` view (`view`)', 'View')}
    >
      {text('`ShellReturnToBanner` children (`children`)', 'Application')}
    </ShellReturnToBanner>

    <ShellHeader>
      <ShellHeaderName {...nameProps()} />
    </ShellHeader>
  </UNSTABLE__Shell>
);

const toolbar = () => (
  <UNSTABLE__Shell>
    <ShellToolbar labelText="Toolbar">
      <ToolbarAction labelText="Menu" renderIcon={Menu20}>
        <Nav heading="My applications" label="Applications">
          <NavItem href="#">Application 1</NavItem>
          <NavItem href="#">Application 2</NavItem>
          <NavItem href="#">Application 3</NavItem>
        </Nav>
      </ToolbarAction>

      <ToolbarAction labelText="Settings" renderIcon={Settings20}>
        <Nav heading="General settings" label="Settings">
          <NavItem href="#">Settings 1</NavItem>
          <NavItem href="#">Settings 2</NavItem>
          <NavItem href="#">Settings 3</NavItem>
        </Nav>

        <Nav heading="Application settings" label="Application settings">
          <NavList title="Application 1">
            <NavItem href="#">Application settings 1</NavItem>
            <NavItem href="#">Application settings 2</NavItem>
            <NavItem href="#">Application settings 3</NavItem>
          </NavList>
        </Nav>
      </ToolbarAction>

      <ToolbarAction labelText="Help" renderIcon={Help20}>
        <Nav heading="Support" label="Support">
          <NavItem href="#">Support 1</NavItem>
        </Nav>
      </ToolbarAction>
    </ShellToolbar>

    <ShellHeader>
      <ShellHeaderName {...nameProps()} />
    </ShellHeader>
  </UNSTABLE__Shell>
);

const notifications = () => (
  <UNSTABLE__Shell>
    <ShellHeader>
      <ShellHeaderName {...nameProps()} />

      <HeaderActions>
        <HeaderAction
          labelText="Notifications"
          popover={
            <>
              <NotificationsPopover
                iconDescription="Clear notifications"
                label="Today"
                onClear={action(
                  '`NotificationsPopover` clear handler (`onClear`)'
                )}
                title="Notifications"
              >
                <PopoverNotification
                  clearButtonLabel="Clear Notification 1"
                  dateTime="2020-02-01T09:00:00.770Z"
                  description="Notification 1"
                  onClearButtonClick={action(
                    '`PopoverNotification` 1 clear handler (`onClearButtonClick`)'
                  )}
                  product="Application 1"
                  tooltipDirection="bottom"
                  viaLabel="via"
                />

                <PopoverNotification
                  clearButtonLabel="Clear Notification 2"
                  dateTime="2020-02-01T09:00:00.770Z"
                  description="Notification 2"
                  onClearButtonClick={action(
                    '`PopoverNotification` 2 clear handler (`onClearButtonClick`)'
                  )}
                  product="Application 2"
                  tooltipDirection="top"
                  viaLabel="via"
                />

                <PopoverNotification
                  clearButtonLabel="Clear Notification 3"
                  dateTime="2020-02-01T09:00:00.770Z"
                  description="Notification 3"
                  onClearButtonClick={action(
                    '`PopoverNotification` 3 clear handler (`onClearButtonClick`)'
                  )}
                  product="Application 3"
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
          hasBadge={boolean('`HeaderAction` badge (`hasBadge`)', true)}
        >
          <IconButton aria-label="Notifications" renderIcon={Notification20} />
        </HeaderAction>
      </HeaderActions>
    </ShellHeader>
  </UNSTABLE__Shell>
);

const profile = () => (
  <UNSTABLE__Shell>
    <ShellHeader>
      <ShellHeaderName {...nameProps()} />

      <HeaderActions>
        <HeaderAction
          {...profileProps()}
          popover={
            <ProfilePopover {...profilePopoverProps()}>
              <PopoverFooter>
                <Link href="#0">Edit profile</Link>

                <Link href="#0">Sign out</Link>
              </PopoverFooter>
            </ProfilePopover>
          }
        >
          <IconButton aria-label="Profile" renderIcon={User20} />
        </HeaderAction>
      </HeaderActions>
    </ShellHeader>
  </UNSTABLE__Shell>
);

const profileAccount = () => (
  <UNSTABLE__Shell>
    <ShellHeader>
      <ShellHeaderName {...nameProps()} />

      <HeaderActions>
        <HeaderAction
          {...profileProps()}
          popover={
            <ProfilePopover {...profilePopoverProps()}>
              <PopoverAccount {...accountProps()} />
            </ProfilePopover>
          }
        >
          <IconButton aria-label="Profile" renderIcon={User20} />
        </HeaderAction>
      </HeaderActions>
    </ShellHeader>
  </UNSTABLE__Shell>
);

const profileAccountList = () => (
  <UNSTABLE__Shell>
    <ShellHeader>
      <ShellHeaderName {...nameProps()} />

      <HeaderActions>
        <HeaderAction
          {...profileProps()}
          popover={
            <ProfilePopover {...profilePopoverProps()}>
              <PopoverAccountList
                {...accountProps()}
                name={text('`PopoverAccountList` name (`name`)', 'Account 1')}
              >
                <PopoverAccountItem {...accountProps()} />

                <PopoverAccountItem account="Account 2" id="Account 2">
                  Account 2
                </PopoverAccountItem>

                <PopoverAccountItem account="Account 3" id="Account 3">
                  Account 3
                </PopoverAccountItem>
              </PopoverAccountList>
            </ProfilePopover>
          }
        >
          <IconButton aria-label="Profile" renderIcon={User20} />
        </HeaderAction>
      </HeaderActions>
    </ShellHeader>
  </UNSTABLE__Shell>
);

export default meta(
  patterns('UNSTABLE__Shell'),
  'Shells provide composeability and customisability for IBM Security applications, including the header, notifications, profile, popovers, and toolbar items.',
  disableCentered()
);

export {
  Default,
  skipToContent,
  returnToBanner,
  toolbar,
  notifications,
  profile,
  profileAccount,
  profileAccountList,
};
