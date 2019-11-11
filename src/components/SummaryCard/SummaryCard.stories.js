/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Folder20 from '@carbon/icons-react/lib/folder/20';

import React from 'react';

import { patterns } from '../../../.storybook';
import {
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
  SummaryCardSkeleton,
  Tooltip,
} from '../..';
import { lorem } from '../_mocks_';

storiesOf(patterns('SummaryCard'), module)
  .add('with primary label', () => (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
          <SummaryCard>
            <SummaryCardHeader
              title="Summary card"
              status={
                <Tooltip showIcon iconDescription="Status">
                  Tooltip content
                </Tooltip>
              }
            />
            <SummaryCardBody>{lorem}</SummaryCardBody>
            <SummaryCardFooter>
              <SummaryCardAction expandedContent={lorem} renderIcon={Folder20}>
                Button label that is long and will be truncated
              </SummaryCardAction>
              <SummaryCardAction
                iconDescription="Icon description"
                renderIcon={Folder20}
                hasIconOnly
                onClick={action('onClick')}
                tooltipPosition="bottom"
                tooltipAlignment="center"
              />
              <SummaryCardAction
                iconDescription="Icon description"
                renderIcon={Folder20}
                hasIconOnly
                onClick={action('onClick')}
                tooltipPosition="bottom"
                tooltipAlignment="center"
              />
            </SummaryCardFooter>
          </SummaryCard>
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
          <SummaryCard>
            <SummaryCardHeader
              title="Summary card with no footer"
              status={
                <Tooltip showIcon iconDescription="Status">
                  Tooltip content
                </Tooltip>
              }
            />
            <SummaryCardBody>{lorem.repeat(5)}</SummaryCardBody>
          </SummaryCard>
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
          <SummaryCard>
            <SummaryCardHeader title="Summary card with no status" />
            <SummaryCardBody>{lorem.repeat(3)}</SummaryCardBody>
            <SummaryCardFooter>
              <SummaryCardAction loading expandedContent={lorem.repeat(5)}>
                Button label
              </SummaryCardAction>
              <SummaryCardAction
                iconDescription="Icon description"
                renderIcon={Folder20}
                hasIconOnly
                onClick={action('onClick')}
                tooltipPosition="bottom"
                tooltipAlignment="center"
              />
              <SummaryCardAction
                iconDescription="Icon description"
                renderIcon={Folder20}
                hasIconOnly
                onClick={action('onClick')}
                tooltipPosition="bottom"
                tooltipAlignment="center"
              />
              <SummaryCardAction
                iconDescription="Icon description"
                renderIcon={Folder20}
                hasIconOnly
                onClick={action('onClick')}
                tooltipPosition="bottom"
                tooltipAlignment="center"
              />
            </SummaryCardFooter>
          </SummaryCard>
        </div>
      </div>
    </div>
  ))
  .add('with skeleton', () => (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row">
        <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
          <SummaryCardSkeleton />
        </div>
      </div>
    </div>
  ));
