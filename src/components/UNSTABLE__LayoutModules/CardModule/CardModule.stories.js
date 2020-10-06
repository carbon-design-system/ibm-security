/**
 * @file Card module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import {
  ActionBar,
  Button,
  CardModule,
  Column,
  Row,
  SummaryCard as SummaryCardComponent,
  SummaryCardBody,
  SummaryCardHeader,
  TitleBar,
} from '../../..';

import withLayout, { withBackground } from '../Layout';
import getTitle, { getDocsParameters } from '../stories';

import page from './index.mdx';

const SummaryCard = withLayout(withBackground(SummaryCardComponent));

export default {
  title: getTitle(CardModule),
  component: CardModule,
  parameters: {
    ...getDocsParameters(page),
  },
};

export const Default = () => (
  <CardModule>
    <Row>
      <Column>
        <SummaryCard>
          <SummaryCardHeader title="Label" />

          <SummaryCardBody>
            <TitleBar title="Title" />
          </SummaryCardBody>
        </SummaryCard>
      </Column>

      <Column>
        <SummaryCard>
          <SummaryCardHeader title="Label" />

          <SummaryCardBody>
            <TitleBar title="Title" />
          </SummaryCardBody>
        </SummaryCard>
      </Column>

      <Column>
        <SummaryCard>
          <SummaryCardHeader title="Label" />

          <SummaryCardBody>
            <TitleBar title="Title" />
          </SummaryCardBody>
        </SummaryCard>
      </Column>
    </Row>
  </CardModule>
);

export const Complimentary = () => (
  <CardModule>
    <TitleBar title="Section title" />

    <TitleBar element="h3" title="Subsection title" subsection />

    <ActionBar>
      <Button kind="ghost">Button</Button>
    </ActionBar>

    <Row>
      <Column>
        <SummaryCard>
          <SummaryCardHeader title="Label" />

          <SummaryCardBody>
            <TitleBar title="Title" />
          </SummaryCardBody>
        </SummaryCard>
      </Column>

      <Column>
        <SummaryCard>
          <SummaryCardHeader title="Label" />

          <SummaryCardBody>
            <TitleBar title="Title" />
          </SummaryCardBody>
        </SummaryCard>
      </Column>

      <Column>
        <SummaryCard>
          <SummaryCardHeader title="Label" />

          <SummaryCardBody>
            <TitleBar title="Title" />
          </SummaryCardBody>
        </SummaryCard>
      </Column>
    </Row>
  </CardModule>
);
