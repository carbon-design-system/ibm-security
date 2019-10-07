/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Folder20 from '@carbon/icons-react/lib/folder/20';

import React from 'react';

import { patterns } from '../../../.storybook';
import {
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardDetails,
  SummaryCardFooter,
  SummaryCardHeader,
  SummaryCardPrimaryAction,
  SummaryCardSkeleton,
  Tooltip,
} from '../..';

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('with primary label', () => (
    <SummaryCard>
      <SummaryCardHeader
        title="my title"
        status={<Tooltip>Tooltip content</Tooltip>}
      />

      <SummaryCardBody>Card content</SummaryCardBody>

      <SummaryCardFooter>
        <SummaryCardAction
          iconDescription="blah"
          renderIcon={Folder20}
          hasIconOnly
        />
        <SummaryCardAction
          iconDescription="blah"
          renderIcon={Folder20}
          hasIconOnly
        />
        <SummaryCardAction
          iconDescription="blah"
          renderIcon={Folder20}
          hasIconOnly
        />

        {/* <SummaryCardDetails>Expanded area content</SummaryCardDetails> */}
      </SummaryCardFooter>
    </SummaryCard>
  ));
