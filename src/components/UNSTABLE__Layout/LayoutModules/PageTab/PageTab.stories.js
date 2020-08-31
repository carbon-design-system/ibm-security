/**
 * @file Page tab stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { patterns } from '../../../../../.storybook';

import { PageTab, PageTabDetails, Tabs, Tab } from '../../../..';

import page from './PageTab.mdx';

export const Default = () => (
  <PageTab>
    <Tabs>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
    </Tabs>
  </PageTab>
);

export default {
  title: patterns(`Layout Modules/${PageTab.name}`),
  component: PageTab,
  subcomponents: { PageTabDetails },
  parameters: { docs: { page }, layout: 'fullscreen' },
};
