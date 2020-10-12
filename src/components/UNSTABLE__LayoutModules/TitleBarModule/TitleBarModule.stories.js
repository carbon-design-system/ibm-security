/**
 * @file Title bar module stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { IconButtonBar, TitleBarModule } from '../../..';

import getTitle from '../stories';

export default {
  title: getTitle(TitleBarModule),
  component: TitleBarModule,
  args: {
    title: 'Section title',
  },
  parameters: {
    ...getDocsParameters(),
  },
  decorators: [withResponsive],
};

export const Default = args => <TitleBarModule {...args} />;

export const Actions = args => (
  <TitleBarModule {...args}>
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
  </TitleBarModule>
);
