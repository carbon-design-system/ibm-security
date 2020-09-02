/**
 * @file Title bar stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import withResponsive from '../../../../../.storybook/decorators';
import { IconButtonBar, Title, TitleBar, TitleBarItems } from '../../../..';
import { getTitle } from '../../stories';

import page from './index.mdx';

export default {
  title: getTitle(TitleBar),
  component: TitleBar,
  subcomponents: { Title, TitleBarItems },
  parameters: {
    docs: { page },
    info: {
      disable: true,
    },
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <TitleBar>
    <Title>Section title</Title>

    <TitleBarItems>
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
    </TitleBarItems>
  </TitleBar>
);
