/**
 * @file List item module stories.
 * @copyright IBM Security 2021
 */

import {
  Bee16,
  InProgress16,
  Locked16,
  UserAvatar20,
} from '@carbon/icons-react';

import { action } from '@storybook/addon-actions';

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { ICA, ListItemModule, ProfileImage, StatusIcon, Tag } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle({
    displayName: 'ListItemModule (Canary)',
    name: 'ListItemModule',
  }),
  component: ListItemModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <Column>
        <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

        <span {...getLayoutProps({ type: 'label' })}>Label</span>
      </Column>
    )}
  </ListItemModule>
);

export const NonInteractive = () => (
  <ListItemModule>
    {({ Column, getLayoutProps }) => (
      <Column>
        <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

        <span {...getLayoutProps({ type: 'label' })}>Label</span>
      </Column>
    )}
  </ListItemModule>
);

export const AsButton = () => (
  <ListItemModule onClick={action('onClick')}>
    {({ Column, getLayoutProps }) => (
      <Column>
        <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

        <span {...getLayoutProps({ type: 'label' })}>Label</span>
      </Column>
    )}
  </ListItemModule>
);

export const Detailed = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <Bee16 {...getLayoutProps({ type: 'icon' })} />
        </Column>

        <Column>
          <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

          <p {...getLayoutProps({ type: 'description' })}>
            Description here. It can go up to three lines before truncating.
          </p>

          <section {...getLayoutProps({ type: 'component' })}>
            Nested Component
          </section>

          <span {...getLayoutProps({ type: 'label' })}>Time stamp / label</span>

          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
        </Column>

        <Column {...getLayoutProps({ type: 'farside-column' })}>
          <Locked16 />
        </Column>
      </>
    )}
  </ListItemModule>
);

export const WithProfileImage = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <ProfileImage
            {...getLayoutProps({ type: 'profile-image' })}
            profile={{
              description: <span>Profile Image</span>,
              image_url: null,
              name: {
                first_name: 'Sample',
                surname: 'User',
              },
            }}
          />
        </Column>

        <Column>
          <p {...getLayoutProps({ type: 'description' })}>
            Description here. It can go up to three lines before truncating.
          </p>

          <span {...getLayoutProps({ type: 'label' })}>Today 11:50 AM</span>
        </Column>
      </>
    )}
  </ListItemModule>
);

export const WithTag = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column {...getLayoutProps()}>
          <h2 {...getLayoutProps({ type: 'title' })}>Bill Callahan</h2>
        </Column>

        <Column {...getLayoutProps({ type: 'farside-column' })}>
          <Tag>16</Tag>
        </Column>
      </>
    )}
  </ListItemModule>
);

export const WithComponent = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <Bee16 {...getLayoutProps({ type: 'icon' })} />

          <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

          <p {...getLayoutProps({ type: 'description' })}>
            Description here. It can go up to three lines before truncating.
          </p>

          <section {...getLayoutProps({ type: 'component' })}>
            <ICA label="Label" value={100} />
          </section>
        </Column>
      </>
    )}
  </ListItemModule>
);

export const WithStatusIcon = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <h2 {...getLayoutProps({ type: 'title' })}>
            GPON vulnerability exploited
          </h2>

          <span {...getLayoutProps({ type: 'label' })}>Threat activity</span>
        </Column>

        <Column {...getLayoutProps({ type: 'farside-column' })}>
          <StatusIcon iconDescription="Status Icon" size="lg" status="info" />
        </Column>
      </>
    )}
  </ListItemModule>
);

export const WithInProgressIcon = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <InProgress16 {...getLayoutProps({ type: 'icon' })} />
        </Column>

        <Column>
          <h2 {...getLayoutProps({ type: 'title' })}>Create new doc types</h2>

          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
        </Column>
      </>
    )}
  </ListItemModule>
);

NonInteractive.parameters = {
  viewMode: 'canvas',
};

AsButton.parameters = {
  viewMode: 'canvas',
};

Detailed.parameters = {
  viewMode: 'canvas',
};

WithProfileImage.parameters = {
  viewMode: 'canvas',
};

WithTag.parameters = {
  viewMode: 'canvas',
};

WithComponent.parameters = {
  viewMode: 'canvas',
};

WithStatusIcon.parameters = {
  viewMode: 'canvas',
};

WithInProgressIcon.parameters = {
  viewMode: 'canvas',
};
