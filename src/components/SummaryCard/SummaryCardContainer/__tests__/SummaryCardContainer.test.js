/**
 * @file Summary card container tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React, { Fragment } from 'react';

import {
  SummaryCard,
  SummaryCardAction,
  SummaryCardBatchAction,
  SummaryCardBatchActions,
  SummaryCardBody,
  SummaryCardContainer,
  SummaryCardFooter,
  SummaryCardHeader,
  SummaryCardSelect,
} from '../../../..';

const ids = new Array(5)
  .fill()
  .map((title = 'summary-card', id) => `${title}__${id}`);

describe('SummaryCardContainer', () => {
  beforeEach(() => {
    render(
      <SummaryCardContainer
        ids={ids}
        render={({
          getBatchActionProps,
          getSelectionProps,
          ids,
          selectedIds,
        }) => (
          <Fragment>
            <SummaryCardBatchActions {...getBatchActionProps()}>
              <SummaryCardBatchAction onClick={() => console.log(selectedIds)}>
                SummaryCardBatchAction
              </SummaryCardBatchAction>
            </SummaryCardBatchActions>

            {ids.map(id => (
              <SummaryCard key={id}>
                <SummaryCardHeader title={`SummaryCardHeader ${id}`} />
                <SummaryCardBody>{`SummaryCardBody ${id}`}</SummaryCardBody>
                <SummaryCardFooter>
                  <SummaryCardSelect
                    data-testid={`SummaryCardSelect__${id}`}
                    labelText={`SummaryCardSelect ${id}`}
                    {...getSelectionProps({ id })}
                  />
                  <SummaryCardAction>
                    {`SummaryCardAction ${id}`}
                  </SummaryCardAction>
                </SummaryCardFooter>
              </SummaryCard>
            ))}
          </Fragment>
        )}
      />
    );
  });

  it('...', () => {
    expect(true).toBe(true);
  });
});
