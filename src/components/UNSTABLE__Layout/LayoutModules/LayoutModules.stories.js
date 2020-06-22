/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import ArrowRight16 from '@carbon/icons-react/lib/arrow--right/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';
import { breakpoints } from '@carbon/layout';

import { Column, Row } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../../.storybook';
import { carbonPrefix } from '../../../globals/namespace';

import {
  ActionBarModule,
  ActionBarModuleActions,
  BackgroundModule,
  Button,
  ButtonClusterModule,
  CardModule,
  CardModuleAction,
  CardModuleCard,
  DescriptionModule,
  DescriptionModuleDescription,
  ICA as ICAComponent,
  ICAModule,
  ICAModuleICA,
  IconButtonBar,
  Link,
  PageTabModule,
  PageTabModuleDetails,
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
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

import storyDescription from '../stories';

const setDescription = ({ displayName }, url) => ({
  parameters: {
    info: `${storyDescription}
- [Learn more](${url}) about how to use the '${displayName}'`,
  },
});

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

actionBar.story = setDescription(
  ActionBarModule,
  'https://ibm.box.com/s/rn0pt5mov83tbd5k086ee39wgpm18mmq'
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

buttonCluster.story = setDescription(
  ButtonClusterModule,
  'https://ibm.box.com/s/medn74frnbw2aatsc1p74ncmrmlr51g3'
);

const card = () => (
  <CardModule>
    <TitleModule>Summary</TitleModule>
    <TitleModule
      className={`${carbonPrefix}type-productive-heading-01`}
      element="h3"
    >
      Sub-section title
    </TitleModule>
    <ActionBarModule>
      <Button kind="ghost" renderIcon={Filter16}>
        Action
      </Button>
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
    <Row>
      {new Array(6).fill().map((item = 'cardModuleCard', index) => {
        const key = `${item}__${index}`;

        return (
          <Column key={key}>
            <CardModuleCard>
              <SummaryCard>
                <SummaryCardHeader title="Label" />
                <SummaryCardBody>
                  <TitleModule>Title</TitleModule>
                </SummaryCardBody>
                <SummaryCardFooter>
                  <SummaryCardAction>Scan now</SummaryCardAction>
                </SummaryCardFooter>
              </SummaryCard>
            </CardModuleCard>
          </Column>
        );
      })}
    </Row>
    <Row>
      <Column>
        <CardModuleAction>
          <Button kind="ghost" renderIcon={ArrowRight16}>
            Action
          </Button>
        </CardModuleAction>
      </Column>
    </Row>
  </CardModule>
);

card.story = setDescription(
  CardModule,
  'https://ibm.box.com/s/ery5j69q2a20o788s2f7mnjmoew7k9ka'
);

const description = () => (
  <DescriptionModule>
    <TitleModule>Summary</TitleModule>
    <TitleModule
      className={`${carbonPrefix}type-productive-heading-01`}
      element="h3"
    >
      Sub-section title
    </TitleModule>
    <DescriptionModuleDescription>
      BadFlick is a backdoor that is usually seen being distributed using
      exploited word documents. It does not have any persistence to survive
      reboot, but it is capable of opening a reverse shell connection to its C2
      server where it can download and execute possibly other malware.
    </DescriptionModuleDescription>
    <Link href="#0">View more</Link>
  </DescriptionModule>
);

description.story = setDescription(
  DescriptionModule,
  'https://ibm.box.com/s/xozfswg0kzn0tuv61uvtz59qoduui6mx'
);

const ICA = () => (
  <ICAModule>
    <TitleModule>Summary</TitleModule>
    <Row>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Reviews complete" value={300} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Approved" value={241} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Rejected" value={28} />
        </Column>
      </ICAModuleICA>
    </Row>
  </ICAModule>
);

ICA.story = setDescription(
  ICAModule,
  'https://ibm.box.com/s/f0orv16ivr46ukwd6jn0hmuw0slxfj2c'
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

pageTab.story = setDescription(
  PageTabModule,
  'https://ibm.box.com/s/17fg1zm60roe6bhipl85pvtx9mxztnfh'
);

const title = () => <TitleModule>TitleModule</TitleModule>;

const titleBar = () => (
  <TitleBarModule>
    <TitleModule>TitleModule</TitleModule>

    <TitleBarModuleActions>
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
    </TitleBarModuleActions>
  </TitleBarModule>
);

titleBar.story = setDescription(
  TitleBarModule,
  'https://ibm.box.com/s/0wp85w684cnsseqdetezhyhk80aqzjux'
);

const typeLayout = () => (
  <TypeLayoutModule>
    <TitleModule>TitleModule</TitleModule>
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

typeLayout.story = setDescription(
  TypeLayoutModule,
  'https://ibm.box.com/s/u4idf3g6sqsvj2529lps6q19s1imu8eq'
);

export default meta(
  patterns('UNSTABLE LayoutModules'),
  storyDescription,
  null,
  [story => <div style={{ width: breakpoints.lg.width }}>{story()}</div>]
);

export {
  actionBar,
  background,
  buttonCluster,
  card,
  description,
  ICA,
  pageTab,
  title,
  titleBar,
  typeLayout,
};
