/**
 * @file Header action tests.
 * @copyright IBM Security 2020
 */

import Notification20 from '@carbon/icons-react/lib/notification/20';
import User20 from '@carbon/icons-react/lib/user/20';
import React from 'react';
import { render } from '@testing-library/react';

import {
  Button,
  HeaderAction,
  IconButton,
  Link,
  NotificationsPopover,
  PopoverAccountItem,
  PopoverAccountList,
  PopoverFooter,
  PopoverNotification,
  ProfilePopover,
} from '../../../..';

describe('HeaderAction', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <HeaderAction>
        <Button>Create an account</Button>
      </HeaderAction>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('HeaderAction');
  });

  test('should have no Axe or DAP violations when displaying notifications', async () => {
    const main = document.createElement('main');
    render(
      <HeaderAction
        labelText="Notifications"
        popover={
          <>
            <NotificationsPopover
              iconDescription="Clear notifications"
              label="Today"
              onClear={() => {}}
              title="Notifications"
            >
              <PopoverNotification
                clearButtonLabel="Clear Notification 1"
                dateTime="2020-02-01T09:00:00.770Z"
                description="Notification 1"
                onClearButtonClick={() => {}}
                product="Application 1"
                tooltipDirection="bottom"
                viaLabel="via"
              />
              <PopoverNotification
                clearButtonLabel="Clear Notification 2"
                dateTime="2020-02-01T09:00:00.770Z"
                description="Notification 2"
                onClearButtonClick={() => {}}
                product="Application 2"
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
        hasBadge
      >
        <IconButton aria-label="Notifications" renderIcon={Notification20} />
      </HeaderAction>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'HeaderAction with notifications'
    );
  });

  test('should have no Axe or DAP violations when displaying account list', async () => {
    const main = document.createElement('main');
    render(
      <HeaderAction
        labelText="Profile"
        popover={
          <ProfilePopover name="Account" surname="1">
            <PopoverAccountList
              account="Account 1"
              id="account-1"
              name="Account 1"
            >
              <PopoverAccountItem account="Account 1" id="account-1">
                Account 1
              </PopoverAccountItem>

              <PopoverAccountItem account="Account 2" id="account-2">
                Account 2
              </PopoverAccountItem>
            </PopoverAccountList>
          </ProfilePopover>
        }
      >
        <IconButton aria-label="Profile" renderIcon={User20} />
      </HeaderAction>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'HeaderAction with account list'
    );
  });
});
