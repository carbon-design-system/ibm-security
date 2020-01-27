/**
 * @file Summary card tests.
 * @copyright IBM Security 2020
 */

import Folder20 from '@carbon/icons-react/lib/folder/20';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import {
  SummaryCard,
  SummaryCardHeader,
  SummaryCardBody,
  SummaryCardAction,
  SummaryCardFooter,
  Tooltip,
} from '../../..';

describe('SummaryCard', () => {
  test('should have no Axe or DAP violations`', async () => {
    const main = document.createElement('main');
    render(
      <SummaryCard>
        <SummaryCardHeader
          title="test summary card title"
          status={
            <Tooltip showIcon iconDescription="test status icon description">
              test status tooltip content
            </Tooltip>
          }
          truncate
        />
        <SummaryCardBody>test card body content</SummaryCardBody>
        <SummaryCardFooter>
          <SummaryCardAction
            expandedContent="test expanded action content"
            renderIcon={Folder20}
          >
            test button label that is long and will be truncated
          </SummaryCardAction>
          <SummaryCardAction
            iconDescription="test action icon description"
            renderIcon={Folder20}
            hasIconOnly
            tooltipPosition="bottom"
            tooltipAlignment="center"
          />
        </SummaryCardFooter>
      </SummaryCard>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('SummaryCard');
  });

  test('should cycle summary card elements in tab order', () => {
    const { getByLabelText, getByTestId } = render(
      <SummaryCard>
        <SummaryCardHeader
          title="test summary card title"
          status={
            <Tooltip showIcon iconDescription="test status icon description">
              test status tooltip content
            </Tooltip>
          }
          truncate
        />
        <SummaryCardBody>test card body content</SummaryCardBody>
        <SummaryCardFooter>
          <SummaryCardAction
            expandedContent="test expanded action content"
            renderIcon={Folder20}
            data-testid="test-first-action-button"
          >
            test button label that is long and will be truncated
          </SummaryCardAction>
          <SummaryCardAction
            iconDescription="test action icon description"
            renderIcon={Folder20}
            hasIconOnly
            tooltipPosition="bottom"
            tooltipAlignment="center"
            data-testid="test-second-action-button"
          />
        </SummaryCardFooter>
      </SummaryCard>
    );

    const titleSelector = document.querySelector(
      '.security--summary-card__header__title button.bx--tooltip--a11y'
    );

    userEvent.tab();

    // The title.
    // Because this title has a tooltip, its content is wrapped in a span.
    // This component also cannot apply a `data-testid` where we need it to.
    // So we must use a selector:
    expect(titleSelector).toHaveFocus();

    userEvent.tab();

    // The status icon in the heading:
    expect(getByLabelText(/test status icon description/i)).toHaveFocus();

    userEvent.tab();

    // The first action button.
    // Because this button has a tooltip, its content is wrapped in a span.
    // So we have to use a test id as a selector:
    expect(getByTestId('test-first-action-button')).toHaveFocus();

    userEvent.tab();

    // The second action button (which is an icon-only button).
    // Because this button has a tooltip, its content is wrapped in a span.
    // So we have to use a test id as a selector:
    expect(getByTestId('test-second-action-button')).toHaveFocus();

    userEvent.tab();

    // Loop complete.
    // The title.
    expect(titleSelector).toHaveFocus();
  });

  // test('should only show expandable content when corresponding action is activated', () => {
  //   // render
  //   // check expandable content is not there
  //   // click on action button
  //   // check that expandable content IS there
  // });

  // test('should not allow a loading action button to be focussed or interactive', () => {
  //   // render
  //   // find loading action
  //   // verify it can't be focused
  //   // verify it can't be interactived with
  // });
});
