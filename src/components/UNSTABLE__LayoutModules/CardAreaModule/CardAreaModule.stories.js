/**
 * @file Card area module stories.
 * @copyright IBM Security 2020 - 2021
 */

import { List16, Search16, Table16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';

import {
  ActionBarModule,
  ActionBarModuleItems,
  CardAreaModule,
  Column,
  IconButtonBar,
  Row,
  SummaryCard as SummaryCardComponent,
  SummaryCardHeader,
  TitleBarModule,
  withBackground,
} from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

const SummaryCard = withBackground(SummaryCardComponent);

export default {
  title: getTitle(CardAreaModule.name),
  component: CardAreaModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};

export const Default = () => (
  <CardAreaModule>
    {({ getLayoutProps }) => (
      <Row>
        <Column>
          <SummaryCard {...getLayoutProps()}>
            <SummaryCardHeader title="Label" />
          </SummaryCard>
        </Column>

        <Column>
          <SummaryCard {...getLayoutProps()}>
            <SummaryCardHeader title="Label" />
          </SummaryCard>
        </Column>

        <Column>
          <SummaryCard {...getLayoutProps()}>
            <SummaryCardHeader title="Label" />
          </SummaryCard>
        </Column>
      </Row>
    )}
  </CardAreaModule>
);

export const Variant = () => (
  <CardAreaModule>
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
              size="lg"
            />
          </ActionBarModuleItems>
        </ActionBarModule>

        <Row>
          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />
            </SummaryCard>
          </Column>

          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />
            </SummaryCard>
          </Column>

          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Label" />
            </SummaryCard>
          </Column>
        </Row>
      </>
    )}
  </CardAreaModule>
);

Variant.parameters = {
  viewMode: 'canvas',
};
