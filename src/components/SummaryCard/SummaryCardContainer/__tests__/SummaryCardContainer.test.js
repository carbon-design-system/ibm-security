/**
 * @file Summary card container tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React, { Fragment } from 'react';

import {
  SummaryCard,
  SummaryCardBatchAction,
  SummaryCardBatchActions,
  SummaryCardContainer,
  SummaryCardFooter,
  SummaryCardSelect,
} from '../../../..';

import props from '../_mocks_';
import summaryCardSelectProps from '../../SummaryCardSelect/_mocks_';

describe('SummaryCardContainer', () => {
  let summaryCardContainer;

  beforeEach(() => {
    summaryCardContainer = render(
      <SummaryCardContainer
        render={({ getBatchActionProps, getSelectionProps, summaryCards }) => (
          <Fragment>
            <SummaryCardBatchActions {...getBatchActionProps()}>
              <SummaryCardBatchAction>
                SummaryCardBatchAction
              </SummaryCardBatchAction>
            </SummaryCardBatchActions>
            {summaryCards.map(({ id }) => (
              <SummaryCard key={id}>
                <SummaryCardFooter>
                  <SummaryCardSelect
                    {...summaryCardSelectProps}
                    {...getSelectionProps({ id })}
                  />
                </SummaryCardFooter>
              </SummaryCard>
            ))}
          </Fragment>
        )}
        summaryCards={props.summaryCards}
      />
    );
  });

  describe('Rendering', () => {
    it('renders', () => {
      expect(summaryCardContainer.container.firstChild).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    // it('', () => {});
  });
});
