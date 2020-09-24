/**
 * @file Action bar module stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import withResponsive from '../../../../.storybook/decorators';
import { ActionBar, ActionBarItems, Button, IconButtonBar } from '../../..';
import getTitle from '../stories';

import page from './index.mdx';

export default {
  title: getTitle(ActionBar),
  component: ActionBar,
  subcomponents: { ActionBarItems },
  parameters: {
    docs: { page },
    info: {
      disable: true,
    },
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <ActionBar>
    <Button kind="ghost">Action 1</Button>

    <ActionBarItems>
      <IconButtonBar
        actions={[
          {
            label: 'Action 2',
            renderIcon: Add16,
          },
          {
            label: 'Action 3',
            renderIcon: Edit16,
          },
          {
            label: 'Action 4',
            renderIcon: Filter16,
          },
        ]}
        size="md"
      />
    </ActionBarItems>
  </ActionBar>
);

export const Details = () => (
  <ActionBar>
    Supplementary details
    <ActionBarItems>
      <IconButtonBar
        actions={[
          {
            label: 'Action 1',
            renderIcon: Add16,
          },
          {
            label: 'Action 2',
            renderIcon: Edit16,
          },
          {
            label: 'Action 3',
            renderIcon: Filter16,
          },
        ]}
        size="md"
      />
    </ActionBarItems>
  </ActionBar>
);
