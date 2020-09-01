/**
 * @file Page tab stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import withResponsive from '../../../../../.storybook/decorators';
import { PageTab, PageTabDetails, Tabs, Tab } from '../../../..';
import { getTitle } from '../../stories';

import page from './index.mdx';

export default {
  title: getTitle(PageTab),
  component: PageTab,
  subcomponents: { PageTabDetails },
  parameters: { docs: { page } },
  decorators: [withResponsive],
};

export const Default = () => (
  <PageTab>
    <Tabs>
      <Tab label="Tab 1">Tab 1 content</Tab>
      <Tab label="Tab 2">Tab 2 content</Tab>
      <Tab label="Tab 3">Tab 3 content</Tab>
    </Tabs>
  </PageTab>
);

export const details = () => (
  <PageTab>
    <PageTabDetails>Supplementary details</PageTabDetails>

    <Tabs>
      <Tab label="Tab 1">Tab 1 content</Tab>
      <Tab label="Tab 2">Tab 2 content</Tab>
      <Tab label="Tab 3">Tab 3 content</Tab>
    </Tabs>
  </PageTab>
);
