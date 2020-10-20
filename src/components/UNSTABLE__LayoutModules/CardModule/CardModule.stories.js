/**
 * @file Card module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withBackground from '../../../../.storybook/components/Background';

import {
  ActionBarModule,
  Button,
  CardModule,
  Column,
  Row,
  SummaryCard as SummaryCardComponent,
  SummaryCardBody,
  SummaryCardHeader,
  TitleBarModule,
} from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

const SummaryCard = withBackground(SummaryCardComponent);

export default {
  title: getTitle(CardModule),
  component: CardModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
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

export const Variant = () => (
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
