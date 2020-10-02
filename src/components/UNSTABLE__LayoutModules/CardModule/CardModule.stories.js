/**
 * @file Card module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import {
  ActionBarModule,
  Button,
  CardModule,
  Column,
  Row,
  SummaryCard,
  SummaryCardBody,
  SummaryCardHeader,
  TitleBarModule,
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

export const Default = () => (
  <CardModule>
    {({ getLayoutProps }) => (
      <Row>
        <Column>
          <SummaryCard {...getLayoutProps()}>
            <SummaryCardHeader title="Label" />

            <SummaryCardBody>
              <TitleBarModule title="Title" />
            </SummaryCardBody>
          </SummaryCard>
        </Column>

        <Column>
          <SummaryCard {...getLayoutProps()}>
            <SummaryCardHeader title="Label" />

            <SummaryCardBody>
              <TitleBarModule title="Title" />
            </SummaryCardBody>
          </SummaryCard>
        </Column>

        <Column>
          <SummaryCard {...getLayoutProps()}>
            <SummaryCardHeader title="Label" />

            <SummaryCardBody>
              <TitleBarModule title="Title" />
            </SummaryCardBody>
          </SummaryCard>
        </Column>
      </Row>
    )}
  </CardModule>
);

export const Complimentary = () => (
  <CardModule>
    {({ getLayoutProps }) => (
      <>
        <TitleBarModule title="Section title" />

        <TitleBarModule element="h3" title="Subsection title" subsection />

        <ActionBarModule>
          <Button kind="ghost">Button</Button>
        </ActionBarModule>

        <Row>
          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />

              <SummaryCardBody>
                <TitleBarModule title="Title" />
              </SummaryCardBody>
            </SummaryCard>
          </Column>

          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />

              <SummaryCardBody>
                <TitleBarModule title="Title" />
              </SummaryCardBody>
            </SummaryCard>
          </Column>

          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />

              <SummaryCardBody>
                <TitleBarModule title="Title" />
              </SummaryCardBody>
            </SummaryCard>
          </Column>
        </Row>
      </>
    )}
  </CardModule>
);
