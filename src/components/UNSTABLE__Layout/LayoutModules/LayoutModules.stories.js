/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import { Column, Grid, Row } from 'carbon-components-react';
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
} from '../../..';

const background = () => (
  <Row>
    <BackgroundModule>
      <Column>BackgroundModule</Column>
    </BackgroundModule>
  </Row>
);

const buttonCluster = () => (
  <Row>
    <Column>
      <ButtonClusterModule>
        <Button kind="ghost" renderIcon={Copy16}>
          Duplicate campaign
        </Button>
        <Button kind="ghost" renderIcon={Activity16}>
          View activity report
        </Button>
      </ButtonClusterModule>
    </Column>
  </Row>
);

const description = () => (
  <Row>
    <Column>
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
          reboot, but it is capable of opening a reverse shell connection to its
          C2 server where it can download and execute possibly other malware.
        </p>
        <Link href="#0">View more</Link>
      </DescriptionModule>
    </Column>
  </Row>
);

const pageTab = () => (
  <Row>
    <Column>
      <PageTabModule>
        <Tabs selected={1}>
          <Tab label="Case" />
          <Tab label="Report" />
          <Tab label="Evidence" />
        </Tabs>
      </PageTabModule>
    </Column>
  </Row>
);

const title = () => (
  <Row>
    <TitleModule className={`${carbonPrefix}type-productive-heading-03`}>
      TitleModule
    </TitleModule>
  </Row>
);

export default meta(
  patterns('UNSTABLE LayoutModules'),
  'Create common, modular, page layouts to deliver consistent cross-portfolio experiences to our users while facilitating a faster time to market for offering teams.',
  [story => <Grid>{story()}</Grid>]
);

export { background, buttonCluster, description, pageTab, title };
