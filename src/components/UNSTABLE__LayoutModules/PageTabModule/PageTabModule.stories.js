/**
 * @file Page tab module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { PageTabModule, PageTabModuleDetails, Tabs, Tab } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(PageTabModule),
  component: PageTabModule,
  subcomponents: { PageTabModuleDetails },
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <PageTabModule>
    <Tabs>
      <Tab label="Tab 1">Tab 1 content</Tab>
      <Tab label="Tab 2">Tab 2 content</Tab>
      <Tab label="Tab 3">Tab 3 content</Tab>
    </Tabs>
  </PageTabModule>
);

export const Variation = () => (
  <PageTabModule>
    <PageTabModuleDetails>Supplementary details</PageTabModuleDetails>

    <Tabs>
      <Tab label="Tab 1">Tab 1 content</Tab>
      <Tab label="Tab 2">Tab 2 content</Tab>
      <Tab label="Tab 3">Tab 3 content</Tab>
    </Tabs>
  </PageTabModule>
);
