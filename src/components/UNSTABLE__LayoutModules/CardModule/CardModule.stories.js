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
} from '../../..';

import getTitle, { getDocsParameters } from '../stories';

import page from './index.mdx';

export default {
  title: getTitle(CardModule),
  component: CardModule,
  parameters: {
    ...getDocsParameters(page),
  },
};

export const Default = () => {
  const EnhancedSummaryCard = withBackground(SummaryCard);

  return (
    <CardModule>
      {({ getLayoutProps }) => (
        <Row>
          <Column>
            <EnhancedSummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />

              <SummaryCardBody>
                <TitleBar title="Title" />
              </SummaryCardBody>
            </EnhancedSummaryCard>
          </Column>

          <Column>
            <EnhancedSummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />

              <SummaryCardBody>
                <TitleBar title="Title" />
              </SummaryCardBody>
            </EnhancedSummaryCard>
          </Column>

          <Column>
            <EnhancedSummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />

              <SummaryCardBody>
                <TitleBar title="Title" />
              </SummaryCardBody>
            </EnhancedSummaryCard>
          </Column>
        </Row>
      )}
    </CardModule>
  );
};

export const Complimentary = () => {
  const EnhancedSummaryCard = withBackground(SummaryCard);

  return (
    <CardModule>
      {({ getLayoutProps }) => (
        <>
          <TitleBar title="Section title" />

          <TitleBar element="h3" title="Subsection title" subsection />

          <ActionBar>
            <Button kind="ghost">Button</Button>
          </ActionBar>

          <Row>
            <Column>
              <EnhancedSummaryCard {...getLayoutProps()}>
                <SummaryCardHeader title="Label" />

                <SummaryCardBody>
                  <TitleBar title="Title" />
                </SummaryCardBody>
              </EnhancedSummaryCard>
            </Column>

            <Column>
              <EnhancedSummaryCard {...getLayoutProps()}>
                <SummaryCardHeader title="Label" />

                <SummaryCardBody>
                  <TitleBar title="Title" />
                </SummaryCardBody>
              </EnhancedSummaryCard>
            </Column>

            <Column>
              <EnhancedSummaryCard {...getLayoutProps()}>
                <SummaryCardHeader title="Label" />

                <SummaryCardBody>
                  <TitleBar title="Title" />
                </SummaryCardBody>
              </EnhancedSummaryCard>
            </Column>
          </Row>
        </>
      )}
    </CardModule>
  );
};
