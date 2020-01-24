/**
 * @file UNSTABLE pagination tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { UNSTABLE__Pagination, PageSelector } from '../../..';

describe('UNSTABLE_Pagination', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <UNSTABLE__Pagination totalItems={40} pageSizes={[10, 20]}>
        {({ currentPage, onSetPage, totalPages }) => (
          <PageSelector
            currentPage={currentPage}
            onChange={event => onSetPage(event.target.value)}
            totalPages={totalPages}
          />
        )}
      </UNSTABLE__Pagination>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('UNSTABLE_Pagination');
  });

  test("should update number of selectable pages when 'items per page' select is changed", () => {
    const { queryByDisplayValue, getByLabelText } = render(
      <UNSTABLE__Pagination totalItems={20} pageSize={5} pageSizes={[5, 10]}>
        {({ currentPage, onSetPage, totalPages }) => (
          <PageSelector
            currentPage={currentPage}
            labelText="test page selector"
            onChange={event => onSetPage(event.target.value)}
            totalPages={totalPages}
          />
        )}
      </UNSTABLE__Pagination>
    );

    // Find the "page sizer" that defines "items per page":
    const pageSizer = document.getElementById(
      'security--unstable-pagination__page-sizer__input-1'
    );

    // Extract default "page sizer" values:
    let pageSelectorValues = [
      ...getByLabelText(/test page selector/i).options,
    ].map(page => page.value);

    // Expect the default, set by `pageSize` prop, to be 5:
    expect(queryByDisplayValue('5').selected);

    // Expect the default number of selectable pages to be 1-4,
    // since there are 20 total items and currently 5 items per page:
    expect(pageSelectorValues).toEqual(['1', '2', '3', '4']);

    // Change the page sizer value with user action:
    userEvent.selectOptions(pageSizer, '10');

    // Expect the updated displayed page size to show `10`:
    expect(queryByDisplayValue('10').selected);

    // Update page selector values since total page size has changed:
    pageSelectorValues = [...getByLabelText(/test page selector/i).options].map(
      page => page.value
    );

    // Expect 1-2 to be the selectable pages,
    // since there are now 10 items per page out of 20 total items.
    expect(pageSelectorValues).toEqual(['1', '2']);
  });

  test('should update current page when page selector is changed', () => {
    const { getByText, getByLabelText } = render(
      <UNSTABLE__Pagination totalItems={10} pageSize={5} pageSizes={[5]}>
        {({ currentPage, onSetPage, totalPages }) => (
          <PageSelector
            currentPage={currentPage}
            labelText="test page selector"
            onChange={event => onSetPage(event.target.value)}
            totalPages={totalPages}
          />
        )}
      </UNSTABLE__Pagination>
    );

    // Expect to see default text for page 1,
    // showing 5 items per page out of 10 total items.
    expect(getByText(/1–5 of 10 items/i)).toBeInTheDocument();

    // Go to page 2:
    userEvent.selectOptions(getByLabelText(/test page selector/i), ['2']);

    // Expect the page selector to show that we are on page 2:
    expect(getByLabelText(/test page selector/i).value).toEqual('2');

    // Expect to see updated text show current items:
    expect(getByText(/6–10 of 10 items/i)).toBeInTheDocument();
  });
});
