/**
 * @file Header stories.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

import { disableCenteredStories, patterns } from '../../../.storybook';

import { SecurityHeader } from '../..';

import {
  labels,
  links,
  accounts,
  notifications,
  profile,
  profileWithAccount,
  profileWithAccountLongName,
} from './_mocks_';

const headerProps = {
  labels,
  links,
};

disableCenteredStories(storiesOf(patterns('SecurityHeader'), module))
  .add('default', () => <SecurityHeader {...headerProps} />, {
    info: {
      text: `
          Basic implementation of the header.
        `,
    },
  })
  .add(
    'with active user',
    () => (
      <SecurityHeader {...headerProps} profile={object('profile', profile)} />
    ),
    {
      info: {
        text: `
          Basic implementation of the header when a user is active.
        `,
      },
    }
  )
  .add(
    'with notifications',
    () => (
      <SecurityHeader
        {...headerProps}
        notifications={notifications}
        onNotificationClear={action('onNotificationClear')}
        profile={object('profile', profile)}
        totalNotifications={307}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with notifications.
        `,
      },
    }
  )
  .add(
    'with profile account',
    () => (
      <SecurityHeader
        {...headerProps}
        onAccountClick={action('onAccountClick')}
        profile={object('profile', profileWithAccount)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with accounts.
        `,
      },
    }
  )
  .add(
    'with account list',
    () => (
      <SecurityHeader
        {...headerProps}
        accounts={object('accounts', accounts)}
        onAccountClick={action('onAccountClick')}
        profile={object('profile', profileWithAccount)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with accounts.
        `,
      },
    }
  )
  .add(
    'with account list and long account name',
    () => (
      <SecurityHeader
        {...headerProps}
        accounts={object('accounts', accounts)}
        onAccountClick={action('onAccountClick')}
        profile={object('profile', profileWithAccountLongName)}
      />
    ),
    {
      info: {
        text: `
          Basic implementation of the header with accounts that have long truncated names.
        `,
      },
    }
  );
