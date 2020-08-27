/**
 * @file UNSTABLE pagination tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { UNSTABLE__Pagination, PageSelector } from '../../..';

import { namespace } from '../Pagination';

describe('UNSTABLE__Pagination', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <UNSTABLE__Pagination totalItems={40} pageSizes={[10, 20]}>
        {({ currentPage, onSetPage, totalPages }) => (
          <PageSelector
            currentPage={currentPage}
            onChange={event => onSetPage(event.target.value)}
            totalPages={totalPages}
          />
        )}
      </UNSTABLE__Pagination>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('UNSTABLE_Pagination');
  });

  test('should cycle pagination elements in tab order', () => {
    const { getByLabelText } = render(
      <UNSTABLE__Pagination
        // Note that we are starting on page 2
        // so that the previous button will be interactive:
        initialPage={2}
        backwardText="test previous button"
        forwardText="test next button"
        totalItems={20}
        pageSize={5}
        pageSizes={[5, 10]}
      >
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

    // Find the "page sizer" select that defines "items per page":
    const pageSizer = document.getElementById(
      `${namespace}__page-sizer__input-1`
    );

    userEvent.tab();

    // The "items per page" select element:
    expect(pageSizer).toHaveFocus();

    userEvent.tab();

    // The "page selector" select element:
    expect(getByLabelText(/test page selector/i)).toHaveFocus();

    userEvent.tab();

    // The "previous" page button:
    expect(
      getByLabelText(/test previous button/i).closest('button')
    ).toHaveFocus();

    userEvent.tab();

    // The "next" page button:
    expect(getByLabelText(/test next button/i).closest('button')).toHaveFocus();

    userEvent.tab();

    // Loop complete.
    // The "items per page" select element:
    expect(pageSizer).toHaveFocus();
  });

  test('should update number of selectable pages when "items per page" select is changed', () => {
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

    // Find the "page sizer" select that defines "items per page":
    const pageSizer = document.getElementById(
      `${namespace}__page-sizer__input-1`
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

    // Expect the default displayed current page to be page 1:
    expect(getByLabelText(/test page selector/i).value).toEqual('1');

    // Go to page 2:
    userEvent.selectOptions(getByLabelText(/test page selector/i), ['2']);

    // Expect the page selector to show that we are on page 2:
    expect(getByLabelText(/test page selector/i).value).toEqual('2');

    // Expect to see updated text showing current items on current page:
    expect(getByText(/6–10 of 10 items/i)).toBeInTheDocument();
  });

  test('should go to the next page when "next" button is clicked', () => {
    const { getByText, getByLabelText } = render(
      <UNSTABLE__Pagination
        forwardText="test next button"
        totalItems={10}
        pageSize={5}
        pageSizes={[5]}
      >
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

    // Expect to see default text for page 1:
    expect(getByText(/1–5 of 10 items/i)).toBeInTheDocument();

    // Expect the default displayed current page to be page 1:
    expect(getByLabelText(/test page selector/i).value).toEqual('1');

    // Click on the "next" button to go to page 2:
    userEvent.click(getByText(/test next button/i));

    // Expect the page selector to show that we are on page 2:
    expect(getByLabelText(/test page selector/i).value).toEqual('2');

    // Expect to see updated text showing current items on page 1:
    expect(getByText(/6–10 of 10 items/i)).toBeInTheDocument();
  });

  test('should go to the previous page when "previous" button is clicked', () => {
    const { getByText, getByLabelText } = render(
      <UNSTABLE__Pagination
        initialPage={2}
        backwardText="test previous button"
        totalItems={10}
        pageSize={5}
        pageSizes={[5]}
      >
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

    // Expect to see text for page 2,
    // because we set the `initialPage={2}`:
    expect(getByText(/6–10 of 10 items/i)).toBeInTheDocument();

    // Expect the default displayed current page to be page 2,
    // because we set the `initialPage={2}`:
    expect(getByLabelText(/test page selector/i).value).toEqual('2');

    // Click on the "previous" button to go back to page 1:
    userEvent.click(getByText(/test previous button/i));

    // Expect the page selector to show that we are on page 1:
    expect(getByLabelText(/test page selector/i).value).toEqual('1');

    // Expect to see updated text showing current items on page 1:
    expect(getByText(/1–5 of 10 items/i)).toBeInTheDocument();
  });

  test('should disable backwards navigation on the first page', () => {
    const { getByText } = render(
      <UNSTABLE__Pagination
        backwardText="test previous button"
        forwardText="test next button"
        totalItems={10}
        pageSize={5}
        pageSizes={[5]}
      />
    );

    // Expect "previous" button to be disabled because we are on the first page:
    expect(
      getByText(/test previous button/i).closest('button')
    ).toHaveAttribute('disabled');

    // Expect "next" button to NOT be disabled:
    expect(
      getByText(/test next button/i).closest('button')
    ).not.toHaveAttribute('disabled');
  });

  test('should disable forward navigation on the last page', () => {
    const { getByText } = render(
      <UNSTABLE__Pagination
        // Note that initial page is set to 2, the last page:
        initialPage={2}
        backwardText="test previous button"
        forwardText="test next button"
        totalItems={10}
        pageSize={5}
        pageSizes={[5]}
      />
    );

    // Expect "previous" button to NOT be disabled:
    expect(
      getByText(/test previous button/i).closest('button')
    ).not.toHaveAttribute('disabled');

    // Expect "next" button to be disabled because we are on the last page:
    expect(getByText(/test next button/i).closest('button')).toHaveAttribute(
      'disabled'
    );
  });

  test('should not display page selector if total items not provided', () => {
    const { queryByLabelText, getByText } = render(
      <UNSTABLE__Pagination
        pageSize={5}
        pageSizes={[5]}
        pageText={page => `test page ${page}`}
      >
        {/* Note that a PageSelector is provided,
        but it will not be shown because `totalItems` is `undefined`: */}
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

    // Expect page selector to not be shown,
    // because without `totalItems`, can't calculate selectable pages:
    expect(queryByLabelText(/test page selector/i)).not.toBeInTheDocument();

    // Expect pageText value (with 1 being the current/default page):
    expect(getByText(/test page 1/i)).toBeInTheDocument();

    // Expect default text "1-5 items" with 5 being derived from page size,
    // not the total items:
    expect(getByText(/1–5 items/i)).toBeInTheDocument();
  });

  test('should not display `itemsPerPageText` or page sizer select if `pageSizes` is `undefined`', () => {
    const { queryByText } = render(
      <UNSTABLE__Pagination
        pageSize={5}
        pageSizes={undefined}
        totalItems={10}
        itemsPerPageText="test items per page"
      />
    );

    // Expect `itemsPerPageText` to not be in document:
    expect(queryByText(/test items per page/i)).not.toBeInTheDocument();

    // Expect page sizer select to not be in the document:
    expect(
      document.getElementById(`${namespace}__page-sizer__input-1`)
    ).not.toBeInTheDocument();
  });

  test('should display `pageRangeText` only (without a page `<select>`) if page selector child not provided', () => {
    const { getByText } = render(
      <UNSTABLE__Pagination
        pageSize={5}
        pageSizes={[5]}
        totalItems={10}
        pageRangeText={(current, total) => `test ${current} of ${total} pages`}
      />
    );

    // Expect `pageRangeText` as-is, with 1 being the current page
    // and 2 being the total pages, based on the a page size of 5 for 10 total items.
    expect(getByText(/test 1 of 2 pages/i)).toBeInTheDocument();
  });

  test('should not display total pages or total items if `pagesUnknown` is `true`', () => {
    const { getByText, queryByText } = render(
      <UNSTABLE__Pagination
        pageSize={5}
        pageSizes={[5]}
        // Note that `pagesUnknown` has been set to `true`:
        pagesUnknown
        // Note that `totalItems` is not provided and is therefore `undefined`.
      >
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

    // Expect default "of 2 pages" text not to be shown,
    // because `pagesUnknown={true}`:
    expect(queryByText(/of 2 pages/i)).not.toBeInTheDocument();

    // Expect default text "1-5 items" with 5 being derived from page size.
    // The max in the range is NOT derived from the total items:
    expect(getByText(/1–5 items/i)).toBeInTheDocument();
  });

  test('should not display total pages or total items if `pagesUnknown` is `true`, even if `totalItems` is provided', () => {
    const { getByText, queryByText } = render(
      <UNSTABLE__Pagination
        pageSize={5}
        pageSizes={[5]}
        // Note that `pagesUnknown` has been set to `true`:
        pagesUnknown
        // Note that `totalItems` is now provided:
        totalItems={10}
      >
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

    // Still expect default "of 2 pages" text not to be shown,
    // because `pagesUnknown={true}` (despite the fact that `totalItems` is provided):
    expect(queryByText(/of 2 pages/i)).not.toBeInTheDocument();

    // Still expect default text "1-5 items" with 5 being derived from page size,
    // not the total items (despite the fact that `totalItems` is provided):
    expect(getByText(/1–5 items/i)).toBeInTheDocument();
  });

  test('should add a custom class to parent pagination component', () => {
    const { container } = render(
      <UNSTABLE__Pagination totalItems={10} className="custom-class" />
    );
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should pass through extra props to parent pagination component via spread attribute', () => {
    const { queryByTestId } = render(
      <UNSTABLE__Pagination totalItems={10} data-testid="test-id" />
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });

  test('should add a custom class to child page selector component', () => {
    const { getByText } = render(
      <PageSelector
        currentPage={1}
        totalPages={1}
        onChange={() => {}}
        labelText="test page selector"
        className="custom-class"
      />
    );
    expect(getByText(/test page selector/i).parentNode).toHaveClass(
      'custom-class'
    );
  });

  test('should pass through extra props to child page selector component via spread attribute', () => {
    const { queryByTestId } = render(
      <PageSelector
        currentPage={1}
        totalPages={1}
        onChange={() => {}}
        data-testid="test-id"
      />
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });
});
