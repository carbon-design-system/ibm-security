/**
 * @file Card module stories.
 * @copyright IBM Security 2020
 */

import { List16, Search16, Table16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withBackground from '../../../../.storybook/components/Background';

import {
  ActionBarModule,
  ActionBarModuleItems,
  CardModule,
  Column,
  IconButtonBar,
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

        <TitleBarModule element="h3" title="Sub-section title" subsection />

        <ActionBarModule>
          Supplementary details
          <ActionBarModuleItems>
            <IconButtonBar
              actions={[
                {
                  label: 'Action 1',
                  renderIcon: Search16,
                },
                {
                  label: 'Action 2',
                  renderIcon: List16,
                },
                {
                  label: 'Action 3',
                  renderIcon: Table16,
                },
              ]}
              size="md"
            />
          </ActionBarModuleItems>
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

Variant.parameters = {
  viewMode: 'canvas',
};
