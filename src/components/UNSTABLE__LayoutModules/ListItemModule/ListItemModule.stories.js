/**
 * @file List item module stories.
 * @copyright IBM Security 2021
 */

import { Bee16, UserAvatar20 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { ListItemModule } from '../../..';

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
  <ListItemModule>
    {({ Column, getLayoutProps }) => (
      <>
        <Column>
          <Bee16 {...getLayoutProps('icon')} />
        </Column>

        <Column>
          <h2 {...getLayoutProps('title')}>Title</h2>

          <p {...getLayoutProps('description')}>Description</p>

          <span {...getLayoutProps('label')}>Label</span>

          <section {...getLayoutProps('component')}>Component</section>

          <UserAvatar20 {...getLayoutProps('avatar')} />
          <UserAvatar20 {...getLayoutProps('avatar')} />
          <UserAvatar20 {...getLayoutProps('avatar')} />
        </Column>
      </>
    )}
  </ListItemModule>
);
