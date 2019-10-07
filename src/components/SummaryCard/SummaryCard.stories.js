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
  SummaryCardSkeleton,
  Tooltip,
} from '../..';

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('with primary label', () => (
    <div style={{ width: '320px' }}>
      <SummaryCard>
        <SummaryCardHeader
          title="my title"
          status={<Tooltip>Tooltip content</Tooltip>}
        />

        <SummaryCardBody>
          Muffin lollipop jelly pastry sesame snaps pie gummies chocolate bar.
          Apple pie liquorice pudding topping cake marshmallow liquorice cake
          cheesecake. Marzipan dessert bear claw cheesecake cake carrot cake
          brownie. Biscuit bear claw cupcake jelly-o dessert croissant cookie.
          Muffin danish fruitcake dessert halvah. Toffee topping cheesecake
          marshmallow pudding liquorice gummies soufflé croissant. Gummies apple
          pie ice cream cake marzipan cake topping gummies. Cake brownie
          pudding. Dragée lemon drops dragée. Lemon drops fruitcake liquorice
          chupa chups gummi bears cotton candy muffin dragée. Lemon drops
          gingerbread wafer cookie bonbon liquorice lemon drops tart gummies.
          Croissant bonbon sweet sweet roll. Muffin lollipop jelly pastry sesame
          snaps pie gummies chocolate bar. Apple pie liquorice pudding topping
          cake marshmallow liquorice cake cheesecake. Marzipan dessert bear claw
          cheesecake cake carrot cake brownie. Biscuit bear claw cupcake jelly-o
          dessert croissant cookie. Muffin danish fruitcake dessert halvah.
          Toffee topping cheesecake marshmallow pudding liquorice gummies
          soufflé croissant. Gummies apple pie ice cream cake marzipan cake
          topping gummies. Cake brownie pudding. Dragée lemon drops dragée.
          Lemon drops fruitcake liquorice chupa chups gummi bears cotton candy
          muffin dragée. Lemon drops gingerbread wafer cookie bonbon liquorice
          lemon drops tart gummies. Croissant bonbon sweet sweet roll.
        </SummaryCardBody>

        <SummaryCardFooter>
          <SummaryCardAction>This should be truncated</SummaryCardAction>

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
    </div>
  ));
