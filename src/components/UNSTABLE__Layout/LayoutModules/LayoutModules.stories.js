/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';
import { breakpoints } from '@carbon/layout';

import { action } from '@storybook/addon-actions';
import { Column } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../../.storybook';
import { carbonPrefix } from '../../../globals/namespace';

import {
  ActionBarModule,
  ActionBarModuleActions,
  BackgroundModule,
  Button,
  ButtonClusterModule,
  ContentSwitcher,
  DescriptionModule,
  IconButtonBar,
  Link,
  PageTabModule,
  PageTabModuleDetails,
  Switch,
  Tabs,
  Tab,
  Tag,
  TitleBarModule,
  TitleBarModuleActions,
  TitleModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutModule,
  TypeLayoutRow,
} from '../../..';

const actionBar = () => (
  <ActionBarModule>
    <Tag type="gray">Closed</Tag> ID: 12 | Result: Completed
    <ActionBarModuleActions>
      <IconButtonBar
        actions={[
          {
            label: 'Search',
            renderIcon: Search16,
          },
          {
            label: 'Filter',
            renderIcon: Filter16,
          },
          {
            label: 'View',
            renderIcon: View16,
          },
        ]}
        size="md"
      />
    </ActionBarModuleActions>
  </ActionBarModule>
);

const background = () => (
  <BackgroundModule>
    <Column>BackgroundModule</Column>
  </BackgroundModule>
);

const buttonCluster = () => (
  <ButtonClusterModule>
    <Button kind="ghost" renderIcon={Copy16}>
      Duplicate campaign
    </Button>
    <Button kind="ghost" renderIcon={Activity16}>
      View activity report
    </Button>
  </ButtonClusterModule>
);

const description = () => (
  <DescriptionModule>
    <TitleModule className={`${carbonPrefix}type-productive-heading-03`}>
      Summary
    </TitleModule>
    <TitleModule
      className={`${carbonPrefix}type-productive-heading-01`}
      element="h3"
    >
      Sub-section title
    </TitleModule>
    <p className={`${carbonPrefix}type-productive-body-short-01`}>
      BadFlick is a backdoor that is usually seen being distributed using
      exploited word documents. It does not have any persistence to survive
      reboot, but it is capable of opening a reverse shell connection to its C2
      server where it can download and execute possibly other malware.
    </p>
    <Link href="#0">View more</Link>
  </DescriptionModule>
);

const pageTab = () => (
  <PageTabModule>
    <PageTabModuleDetails>PageTabModuleDetails</PageTabModuleDetails>
    <Tabs selected={1}>
      <Tab label="Case" />
      <Tab label="Report" />
      <Tab label="Evidence" />
    </Tabs>
  </PageTabModule>
);

const title = () => (
  <TitleModule className={`${carbonPrefix}type-productive-heading-03`}>
    TitleModule
  </TitleModule>
);

const titleBar = () => (
  <TitleBarModule>
    <TitleModule className={`${carbonPrefix}type-productive-heading-03`}>
      TitleModule
    </TitleModule>

    <TitleBarModuleActions>
      <ContentSwitcher onChange={action('onChange')}>
        <Switch text="By reviewer" />
        <Switch text="By account" />
      </ContentSwitcher>
    </TitleBarModuleActions>
  </TitleBarModule>
);

const typeLayout = () => (
  <TypeLayoutModule>
    <TitleModule className={`${carbonPrefix}type-productive-heading-03`}>
      TitleModule
    </TitleModule>
    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Start date</TypeLayoutCell>
          <TypeLayoutCell>Jul 1 2019 at 12:00PM CST</TypeLayoutCell>
        </TypeLayoutRow>
        <TypeLayoutRow>
          <TypeLayoutCell>Duration</TypeLayoutCell>
          <TypeLayoutCell>20 days</TypeLayoutCell>
        </TypeLayoutRow>
        <TypeLayoutRow>
          <TypeLayoutCell>Frequency</TypeLayoutCell>
          <TypeLayoutCell>This campaign repeats every 3 months</TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </TypeLayoutModule>
);

export default meta(
  patterns('UNSTABLE LayoutModules'),
  'Create common, modular, page layouts to deliver consistent cross-portfolio experiences to our users while facilitating a faster time to market for offering teams.',
  null,
  [story => <div style={{ width: breakpoints.md.width }}>{story()}</div>]
);

export {
  actionBar,
  background,
  buttonCluster,
  description,
  pageTab,
  title,
  titleBar,
  typeLayout,
};
