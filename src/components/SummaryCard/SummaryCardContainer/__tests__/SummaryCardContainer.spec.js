/**
 * @file Summary card container tests.
 * @copyright IBM Security 2019
 */

import { fireEvent, render } from '@testing-library/react';
import { settings } from 'carbon-components';
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

const { click } = fireEvent;
const { summaryCards } = props;

describe('SummaryCardContainer', () => {
  const batchActionsActiveClass = `${settings.prefix}--batch-actions--active`;
  const batchActionsId = 'batchActions';
  const selectId = 'select__';

  let batchActions;
  let container;
  let select;

  beforeEach(() => {
    container = render(
      <SummaryCardContainer
        render={({ getBatchActionProps, getSelectionProps, summaryCards }) => (
          <Fragment>
            <SummaryCardBatchActions
              data-testid={batchActionsId}
              {...getBatchActionProps()}
            >
              <SummaryCardBatchAction>
                SummaryCardBatchAction
              </SummaryCardBatchAction>
            </SummaryCardBatchActions>
            {summaryCards.map(({ id }) => (
              <SummaryCard key={id}>
                <SummaryCardFooter>
                  <SummaryCardSelect
                    data-testid={`${selectId}${id}`}
                    {...summaryCardSelectProps}
                    {...getSelectionProps({ id })}
                  />
                </SummaryCardFooter>
              </SummaryCard>
            ))}
          </Fragment>
        )}
        summaryCards={summaryCards}
      />
    );

    const { getByTestId } = container;

    batchActions = getByTestId(batchActionsId);
    select = getByTestId(`${selectId}${summaryCards[0].id}`);
  });

  describe('Rendering', () => {
    it('renders', () => {
      expect(container.container.firstChild).toMatchSnapshot();
    });

    it("doesn't show batch actions when nothing is selected", () => {
      expect(batchActions).not.toHaveClass(batchActionsActiveClass);
    });

    it('shows batch actions when summary cards are selected', () => {
      click(select);

      expect(batchActions).toHaveClass(batchActionsActiveClass);
    });

    it('selects a specific summary card', () => {
      click(select);

      expect(select).toBeChecked();
    });

    it('resets selected summary cards', () => {
      click(select);

      click(container.getByText('Cancel'));

      expect(select).not.toBeChecked();
    });
  });
});
