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
  SummaryCardContent,
  SummaryCardDetails,
  SummaryCardFooter,
  SummaryCardHeader,
  SummaryCardSkeleton,
  Tooltip,
} from '../..';

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('with primary label', () => {
    class SummaryCardWrapper extends React.Component {
      state = { isOpen: false };

      toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };

      render() {
        return (
          <div style={{ width: '320px' }}>
            <SummaryCard>
              <SummaryCardBody>
                <SummaryCardHeader
                  title={text('SummaryCardHeader title (title)', 'my title')}
                  status={
                    <Tooltip showIcon iconDescription="Status">
                      Tooltip content
                    </Tooltip>
                  }
                />
                <SummaryCardContent>
                  {text(
                    'SummaryCardContent (children)',
                    'This is the content inside SummaryCardBody.'
                  )}
                </SummaryCardContent>
                <SummaryCardDetails
                  ariaLabel="test-label"
                  isOpen={this.state.isOpen}
                >
                  {text(
                    'SummaryCardDetails content (children)',
                    'This is the revealed content inside SummaryCardDetails, which overlays SummaryCardContent.'
                  )}
                </SummaryCardDetails>
              </SummaryCardBody>

              <SummaryCardFooter>
                <SummaryCardAction id="test-label" onClick={this.toggleOpen}>
                  {text(
                    'SummaryCardAction content (children)',
                    'Text inside a SummaryCardAction.'
                  )}
                </SummaryCardAction>
                <SummaryCardAction
                  iconDescription="Icon description"
                  renderIcon={Folder20}
                  hasIconOnly
                />
                <SummaryCardAction
                  iconDescription="Icon description"
                  renderIcon={Folder20}
                  hasIconOnly
                />
              </SummaryCardFooter>
            </SummaryCard>
          </div>
        );
      }
    }
    return <SummaryCardWrapper />;
  });
