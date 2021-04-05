/**
 * @file List item module stories.
 * @copyright IBM Security 2021
 */

import { Bee16, Locked16, UserAvatar20 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { ICA, ListItemModule, ProfileImage, StatusIcon, Tag } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(ListItemModule),
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
      <>
        <Column>
          <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

          <span {...getLayoutProps({ type: 'label' })}>Label</span>
        </Column>
      </>
    )}
  </ListItemModule>
);

export const Static = () => (
  <ListItemModule>
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

          <span {...getLayoutProps({ type: 'label' })}>Label</span>
        </Column>
      </>
    )}
  </ListItemModule>
);

export const AsButton = () => (
  <ListItemModule onClick={() => console.log('hi')}>
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

          <span {...getLayoutProps({ type: 'label' })}>Label</span>
        </Column>
      </>
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
            This is where the description goes. It can go up to three lines.
          </p>

          <section {...getLayoutProps({ type: 'component' })}>
            Nested Component
          </section>

          <span {...getLayoutProps({ type: 'label' })}>Time stamp / label</span>

          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
          <UserAvatar20 {...getLayoutProps({ type: 'avatar' })} />
        </Column>

        <Column {...getLayoutProps({ type: 'right-column' })}>
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
            {...getLayoutProps({ type: 'avatar' })}
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
            This is where the description goes. It can go up to three lines.
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
        <Column {...getLayoutProps({ type: 'centered-column' })}>
          <h2 {...getLayoutProps({ type: 'title' })}>Bill Callahan</h2>
        </Column>

        <Column {...getLayoutProps({ type: 'right-column' })}>
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
          <Bee16 {...getLayoutProps({ type: 'top-icon' })} />

          <h2 {...getLayoutProps({ type: 'title' })}>List title</h2>

          <p {...getLayoutProps({ type: 'description' })}>
            This is where the description goes. It can go up to three lines.
          </p>

          <section {...getLayoutProps({ type: 'component' })}>
            <ICA label="Label" value={100} />
            {/* <Button
              iconDescription="Button icon"
              kind="ghost"
              largeText={null}
              onClick={function noRefCheck(){}}
              onFocus={function noRefCheck(){}}
              renderIcon={Add16}
              size="field"
              tabIndex={0}
              tooltipAlignment="center"
              tooltipPosition="top"
              type="button"
            >
              Add to canvas
            </Button> */}
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

        <Column {...getLayoutProps({ type: 'right-column' })}>
          <StatusIcon iconDescription="Status Icon" size="lg" status="info" />
        </Column>
      </>
    )}
  </ListItemModule>
);

export const WithInProgressStatus = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <Bee16 {...getLayoutProps({ type: 'icon' })} />
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

export const Columns = () => (
  <ListItemModule href="#">
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <Bee16 {...getLayoutProps({ type: 'icon' })} />
        </Column>

        <Column {...getLayoutProps({ type: 'narrow-column' })}>
          <h2 {...getLayoutProps({ type: 'title' })}>Asset_name</h2>
        </Column>

        <Column {...getLayoutProps({ type: 'narrow-column' })}>
          <h2 {...getLayoutProps({ type: 'title' })}>Data set</h2>
        </Column>

        <Column {...getLayoutProps({ type: 'narrow-column' })}>
          <h2 {...getLayoutProps({ type: 'title' })}>3:47 pm</h2>
        </Column>
      </>
    )}
  </ListItemModule>
);
