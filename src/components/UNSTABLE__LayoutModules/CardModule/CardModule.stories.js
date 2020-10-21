/**
 * @file Card module stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
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
                  label: 'Action 2',
                  renderIcon: Add16,
                },
                {
                  label: 'Action 3',
                  renderIcon: Edit16,
                },
                {
                  label: 'Action 4',
                  renderIcon: Filter16,
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
