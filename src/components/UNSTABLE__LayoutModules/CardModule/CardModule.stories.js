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
  SummaryCard,
  SummaryCardBody,
  SummaryCardHeader,
  TitleBar,
  withBackground,
  withLayout,
} from '../../..';

import getTitle from '../stories';

import page from './index.mdx';

export default {
  title: getTitle(CardModule),
  component: CardModule,
  parameters: {
    docs: { page },
    info: {
      disable: true,
    },
  },
};

export const Default = () => {
  const EnhancedSummaryCard = withBackground(withLayout(SummaryCard));

  return (
    <CardModule>
      <Row>
        <Column>
          <EnhancedSummaryCard>
            <SummaryCardHeader title="Label" />

            <SummaryCardBody>
              <TitleBar title="Title" />
            </SummaryCardBody>
          </EnhancedSummaryCard>
        </Column>

        <Column>
          <EnhancedSummaryCard>
            <SummaryCardHeader title="Label" />

            <SummaryCardBody>
              <TitleBar title="Title" />
            </SummaryCardBody>
          </EnhancedSummaryCard>
        </Column>

        <Column>
          <EnhancedSummaryCard>
            <SummaryCardHeader title="Label" />

            <SummaryCardBody>
              <TitleBar title="Title" />
            </SummaryCardBody>
          </EnhancedSummaryCard>
        </Column>
      </Row>
    </CardModule>
  );
};

export const Complimentary = () => (
  <>
    <TitleBar title="Section title" />

    <TitleBar element="h3" title="Subsection title" subsection />

    <ActionBar>
      <Button kind="ghost">Button</Button>
    </ActionBar>

    {Default()}
  </>
);
