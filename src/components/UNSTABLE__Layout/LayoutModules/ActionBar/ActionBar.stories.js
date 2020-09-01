/**
 * @file Action bar stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import { patterns } from '../../../../../.storybook';

import { ActionBar, ActionBarItems, Button, IconButtonBar } from '../../../..';

import page from './index.mdx';

export default {
  title: patterns(`Layout Modules/${ActionBar.name}`),
  component: ActionBar,
  subcomponents: { ActionBarItems },
  parameters: { docs: { page } },
};

export const Default = () => (
  <ActionBar>
    <Button kind="ghost">Action</Button>

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
