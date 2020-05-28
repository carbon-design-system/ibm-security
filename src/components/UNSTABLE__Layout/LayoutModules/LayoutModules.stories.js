/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import { Column } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../../.storybook';
import { carbonPrefix } from '../../../globals/namespace';

import {
  BackgroundModule,
  Button,
  ButtonClusterModule,
  DescriptionModule,
  Link,
  PageTabModule,
  Tabs,
  Tab,
  TitleModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutModule,
  TypeLayoutRow,
} from '../../..';

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
  'Create common, modular, page layouts to deliver consistent cross-portfolio experiences to our users while facilitating a faster time to market for offering teams.'
);

export { background, buttonCluster, description, pageTab, title, typeLayout };
