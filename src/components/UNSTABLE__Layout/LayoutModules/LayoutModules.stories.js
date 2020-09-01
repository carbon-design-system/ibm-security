/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import ArrowRight16 from '@carbon/icons-react/lib/arrow--right/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';
import { breakpoints } from '@carbon/layout';

import { Column, Row } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../../.storybook';
import { carbonPrefix } from '../../../globals/namespace';

import {
  ActionBar,
  ActionBarItems,
  Button,
  CardModule,
  CardModuleAction,
  CardModuleCard,
  Description,
  DescriptionContent,
  ICA as ICAComponent,
  ICAModule,
  ICAModuleICA,
  IconButtonBar,
  Link,
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
  TitleBarModule,
  TitleBarModuleActions,
  Title,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutModule,
  TypeLayoutRow,
} from '../../..';

import storyDescription from '../stories';

const setDescription = ({ displayName }, url) => ({
  info: `${storyDescription}
- [Learn more](${url}) about how to use the '${displayName}'`,
});

const card = () => (
  <CardModule>
    <Title>Summary</Title>
    <Title className={`${carbonPrefix}type-productive-heading-01`} element="h3">
      Sub-section title
    </Title>
    <ActionBar>
      <Button kind="ghost" renderIcon={Filter16}>
        Action
      </Button>
      <ActionBarItems>
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
      </ActionBarItems>
    </ActionBar>
    <Row>
      {new Array(6).fill().map((item = 'cardModuleCard', index) => {
        const key = `${item}__${index}`;

        return (
          <Column key={key}>
            <CardModuleCard>
              <SummaryCard>
                <SummaryCardHeader title="Label" />
                <SummaryCardBody>
                  <Title>Title</Title>
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

card.parameters = setDescription(
  CardModule,
  'https://ibm.box.com/s/ery5j69q2a20o788s2f7mnjmoew7k9ka'
);

const description = () => (
  <Description>
    <Title>Summary</Title>
    <Title className={`${carbonPrefix}type-productive-heading-01`} element="h3">
      Sub-section title
    </Title>
    <DescriptionContent>
      BadFlick is a backdoor that is usually seen being distributed using
      exploited word documents. It does not have any persistence to survive
      reboot, but it is capable of opening a reverse shell connection to its C2
      server where it can download and execute possibly other malware.
    </DescriptionContent>
    <Link href="#0">View more</Link>
  </Description>
);

description.parameters = setDescription(
  Description,
  'https://ibm.box.com/s/xozfswg0kzn0tuv61uvtz59qoduui6mx'
);

const ICA = () => (
  <ICAModule>
    <Title>Summary</Title>
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

ICA.parameters = setDescription(
  ICAModule,
  'https://ibm.box.com/s/f0orv16ivr46ukwd6jn0hmuw0slxfj2c'
);

const titleBar = () => (
  <TitleBarModule>
    <Title>Title</Title>

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

titleBar.parameters = setDescription(
  TitleBarModule,
  'https://ibm.box.com/s/0wp85w684cnsseqdetezhyhk80aqzjux'
);

const typeLayout = () => (
  <TypeLayoutModule>
    <Title>Title</Title>
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

typeLayout.parameters = setDescription(
  TypeLayoutModule,
  'https://ibm.box.com/s/u4idf3g6sqsvj2529lps6q19s1imu8eq'
);

export default meta(
  patterns('UNSTABLE LayoutModules'),
  storyDescription,
  null,
  [story => <div style={{ width: breakpoints.lg.width }}>{story()}</div>]
);

export { card, description, ICA, titleBar, typeLayout };
