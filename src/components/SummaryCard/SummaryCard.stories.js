/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

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

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(withA11y)
  .add('with primary label', () => (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row">
        <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
          <SummaryCard>
            <SummaryCardHeader
              title={text('SummaryCardHeader title (title)', 'my title')}
              status={
                <Tooltip showIcon iconDescription="Status">
                  Tooltip content
                </Tooltip>
              }
            />
            <SummaryCardBody>
              {text(
                'SummaryCardBody (children)',
                'This is the content inside SummaryCardBody.'
              )}
            </SummaryCardBody>
            <SummaryCardFooter>
              <SummaryCardAction
                id="test-label"
                expandedContent={text(
                  'SummaryCardAction expanded content (expandedContent)',
                  'This is the revealed content that overlays SummaryCardContent.'
                )}
              >
                {text(
                  'SummaryCardAction content (children)',
                  'Text inside a SummaryCardAction, which will be truncated.'
                )}
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
