/**
 * @file Card module stories.
 * @copyright IBM Security 2020 - 2021
 */

import { List16, Search16, Table16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';

import {
  ActionBarModule,
  ActionBarModuleItems,
  Button,
  CardModule,
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
  title: getTitle(CardModule.name),
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
  </CardModule>
);

export const Variant = () => (
  <CardModule>
    {({ getLayoutProps }) => (
      <>
        <TitleBarModule title="Section title" />
        <TitleBarModule element="h3" title="Sub-section title" subsection />

        <ActionBarModule>
          <Row narrow>
            <Button
              iconDescription="Action 1"
              kind="ghost"
              renderIcon={Filter16}
              hasIconOnly
            />
          </Row>

          <ActionBarModuleItems>
            <IconButtonBar
              actions={[
                {
                  label: 'Action 2',
                  renderIcon: Search16,
                },
                {
                  label: 'Action 3',
                  renderIcon: List16,
                },
                {
                  label: 'Action 4',
                  renderIcon: Table16,
                },
              ]}
              size="lg"
            />
          </ActionBarModuleItems>
        </ActionBarModule>

        <Row narrow>
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
  </CardModule>
);

Variant.parameters = {
  viewMode: 'canvas',
};
