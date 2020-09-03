/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import ArrowRight16 from '@carbon/icons-react/lib/arrow--right/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';
import { breakpoints } from '@carbon/layout';

import { Column, Row } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../.storybook';
import { carbonPrefix } from '../../globals/namespace';

import {
  ActionBar,
  ActionBarItems,
  Button,
  CardModule,
  CardModuleAction,
  CardModuleCard,
  ICA as ICAComponent,
  ICAModule,
  ICAModuleICA,
  IconButtonBar,
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
  Title,
} from '../..';

const card = () => (
  <CardModule>
    <Title>Summary</Title>
    <Title className={`${carbonPrefix}type-productive-heading-01`} element="h3">
      Sub-section title
    </Title>
    <ActionBar>
      <Button kind="ghost" renderIcon={Filter16}>
        Action
      </Button>
      <ActionBarItems>
        <IconButtonBar
          actions={[
            {
              label: 'Search',
              renderIcon: Search16,
            },
            {
              label: 'Filter',
              renderIcon: Filter16,
            },
            {
              label: 'View',
              renderIcon: View16,
            },
          ]}
          size="md"
        />
      </ActionBarItems>
    </ActionBar>
    <Row>
      {new Array(6).fill().map((item = 'cardModuleCard', index) => {
        const key = `${item}__${index}`;

        return (
          <Column key={key}>
            <CardModuleCard>
              <SummaryCard>
                <SummaryCardHeader title="Label" />
                <SummaryCardBody>
                  <Title>Title</Title>
                </SummaryCardBody>
                <SummaryCardFooter>
                  <SummaryCardAction>Scan now</SummaryCardAction>
                </SummaryCardFooter>
              </SummaryCard>
            </CardModuleCard>
          </Column>
        );
      })}
    </Row>
    <Row>
      <Column>
        <CardModuleAction>
          <Button kind="ghost" renderIcon={ArrowRight16}>
            Action
          </Button>
        </CardModuleAction>
      </Column>
    </Row>
  </CardModule>
);

const ICA = () => (
  <ICAModule>
    <Title>Summary</Title>
    <Row>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Reviews complete" value={300} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Approved" value={241} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Rejected" value={28} />
        </Column>
      </ICAModuleICA>
    </Row>
  </ICAModule>
);

export default meta(patterns('UNSTABLE Layout Modules [Beta]'), null, null, [
  story => <div style={{ width: breakpoints.lg.width }}>{story()}</div>,
]);

export { card, ICA };
