/**
 * @file Layout stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import withResponsive from '../../../../../.storybook/decorators';

import {
  Button,
  Column,
  Row,
  SummaryCard,
  SummaryCardBody,
  Title,
  withBackground,
  withLayout,
} from '../../../..';

import { getTitle } from '../../stories';

import page from './index.mdx';

export default {
  title: getTitle(withLayout),
  component: withLayout,
  parameters: {
    docs: { page },
    info: {
      disable: true,
    },
  },

  decorators: [withResponsive],
};

export const Default = () => {
  const EnhancedButton = withLayout(Button);
  const EnhancedSummaryCard = withBackground(withLayout(SummaryCard));

  return (
    <>
      <Title>Section title</Title>

      <Row>
        {new Array(4).fill().map((summaryCard, index) => {
          const key = `${index}`;

          return (
            <Column key={key}>
              <EnhancedSummaryCard>
                <SummaryCardBody>
                  <Title>Title</Title>
                </SummaryCardBody>
              </EnhancedSummaryCard>
            </Column>
          );
        })}
      </Row>

      <EnhancedButton kind="ghost">Action</EnhancedButton>
    </>
  );
};
