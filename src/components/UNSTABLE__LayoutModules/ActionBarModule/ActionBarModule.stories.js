/**
 * @file Action bar module stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import {
  ActionBarModule,
  ActionBarModuleItems,
  Button,
  IconButtonBar,
} from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(ActionBarModule),
  component: ActionBarModule,
  subcomponents: { ActionBarModuleItems },
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <ActionBarModule>
    <Button kind="ghost">Action 1</Button>

    <ActionBarModuleItems>
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
    </ActionBarModuleItems>
  </ActionBarModule>
);

export const Variation = () => (
  <ActionBarModule>
    Supplementary details
    <ActionBarModuleItems>
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
    </ActionBarModuleItems>
  </ActionBarModule>
);
