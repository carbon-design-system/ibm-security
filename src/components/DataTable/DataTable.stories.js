/**
 * @file Data table stories.
 * @copyright IBM Security 2019 - 2020
 */

import { storiesOf } from '@storybook/react';
import {
  headers,
  initialRows,
} from 'carbon-components-react/lib/components/DataTable/stories/shared';

import React from 'react';

import { components, disableCenteredStories, info } from '../../../.storybook';

import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
} from '../../..';

const story = 'datatable';

const props = () => ({
  useZebraStyles: false,
});

const readmeURL = 'https://goo.gl/dq6CEK';

/* eslint-disable global-require */
disableCenteredStories(
  storiesOf(components('DataTable'), module)
    .add(
      'default',
      () =>
        require('carbon-components-react/lib/components/DataTable/stories/default').default(
          props()
        ),
      info(
        `Data Tables are used to represent a collection of resources, displaying a
        subset of their fields in columns, or headers.

        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}`,
        { story, id: 'default' }
      )
    )
    .add(
      'with batch actions',
      () =>
        require('carbon-components-react/lib/components/DataTable/stories/with-batch-actions').default(
          props()
        ),
      info(
        `Uses <TableToolbar> alongside <TableBatchActions> and <TableBatchAction>
        to create the toolbar and placeholder for where the batch action menu will
        be displayed.
        You can use the \`getBatchActionProps\` prop getter on the
        <TableBatchActions> component to have it wire up the ghost menu for you.
        Individual <TableBatchAction> components take in any kind of event handler
        prop that you would expect to use, like \`onClick\`. You can use these
        alongside the \`selectedRows\` property in your \`render\` prop function
        to pass along this info to your batch action handler.
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}`,
        { story, id: 'with-batch-actions' }
      )
    )
    .add(
      'with expansion',
      () => (
        <DataTable
          rows={initialRows}
          headers={headers}
          {...props}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getTableContainerProps,
          }) => (
            <TableContainer
              title="DataTable"
              description="With expansion"
              {...getTableContainerProps()}
            >
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableExpandHeader />
                    {headers.map(header => (
                      <TableHeader
                        key={header.key}
                        {...getHeaderProps({ header })}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <React.Fragment key={row.id}>
                      <TableExpandRow {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableExpandRow>
                      <TableExpandedRow colSpan={headers.length + 1}>
                        <h1>Expandable row content</h1>
                        <p>Description here</p>
                      </TableExpandedRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
      ),
      info(
        `DataTable with expansion
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}`,
        { story, id: 'with-expansion' }
      )
    )
    .add('with overflow menu', () =>
      require('./stories/with-overflow-menu').default(props())
    )
    .add(
      'with selection',
      () =>
        require('carbon-components-react/lib/components/DataTable/stories/with-selection').default(
          props()
        ),
      info(
        `DataTable with selection
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}`,
        { story, id: 'with-selection' }
      )
    )
    .add(
      'with sorting',
      () =>
        require('carbon-components-react/lib/components/DataTable/stories/with-sorting').default(
          props()
        ),
      info(
        `DataTable with sorting
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}`,
        { story, id: 'with-sorting' }
      )
    )
    .add(
      'with toolbar',
      () =>
        require('carbon-components-react/lib/components/DataTable/stories/with-toolbar').default(
          props()
        ),
      info(
        `DataTable with action menu, filtering, and CSV exporting. Note, the TableToolbarDownload 
        component expects the same rows and header props as provided to the parent Datatable component.
        You can find more detailed information surrounding usage of the Datatable component
        at the following url: ${readmeURL}`,
        { story, id: 'with-toolbar' }
      )
    )
    .add(
      'with skeleton',
      () => require('./stories/with-skeleton').default(props()),
      info(
        'Skeleton states are used as a progressive loading state while the user waits for content to load.This example shows a skeleton state for a data table.',
        { story: 'datatableskeleton', id: 'default' }
      )
    )
);
/* eslint-enable */
