/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
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
  Tooltip,
} from '../..';

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('with primary label', () => (
    <div style={{ width: '320px' }}>
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
              'This is the revealed content inside SummaryCardDetails, which overlays SummaryCardContent.'
            )}
          >
            {text(
              'SummaryCardAction content (children)',
              'Text inside a SummaryCardAction.'
            )}
          </SummaryCardAction>
          <SummaryCardAction
            iconDescription="Icon description"
            renderIcon={Folder20}
            hasIconOnly
            onClick={action('onClick')}
          />
          <SummaryCardAction
            iconDescription="Icon description"
            renderIcon={Folder20}
            hasIconOnly
            onClick={action('onClick')}
          />
        </SummaryCardFooter>
      </SummaryCard>
    </div>
  ));
