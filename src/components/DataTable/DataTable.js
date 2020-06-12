/**
 * @file Data table.
 * @copyright IBM Security 2019 - 2020
 */

import CarbonDataTable from 'carbon-components-react/lib/components/DataTable';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { namespace } from './constants';

import Table from './Table';
import TableOverflowCell from './TableOverflowCell';
import TableToolbarDownload from './TableToolbarDownload';

const {
  TableActionList,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} = CarbonDataTable;

const DataTable = ({
  filterRows,
  headers,
  isSortable,
  isSelectable,
  missingDataCharacter,
  render,
  rows,
  sortRow,
  useZebraStyles,
  ...other
}) => (
  <div className={namespace}>
    {render ? (
      <CarbonDataTable
        filterRows={filterRows}
        headers={headers}
        isSortable={isSortable}
        render={render}
        rows={rows}
        sortRow={sortRow}
        useZebraStyles={useZebraStyles}
        {...other}
      />
    ) : (
      <CarbonDataTable
        headers={headers}
        isSortable={isSortable}
        rows={rows}
        filterRows={filterRows}
        sortRow={sortRow}
        useZebraStyles={useZebraStyles}
        render={({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getTableProps,
          getTableContainerProps,
        }) => (
          <TableContainer {...getTableContainerProps()}>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {isSelectable && <TableSelectAll {...getSelectionProps()} />}
                  {headers.map(header => (
                    <TableHeader
                      {...getHeaderProps({ header, isSortable })}
                      key={header.key}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow
                    {...getRowProps({ row })}
                    className={classnames({
                      [`${namespace}__row--selectable`]: isSelectable,
                    })}
                    key={row.id}
                  >
                    {isSelectable && (
                      <TableSelectRow {...getSelectionProps({ row })} />
                    )}
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>
                        {cell.value ? cell.value : missingDataCharacter}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {...other}
      />
    )}
  </div>
);

DataTable.defaultProps = {
  isSortable: true,
  isSelectable: true,
  missingDataCharacter: '–',
  render: undefined,
  sortRow: undefined,
  filterRows: undefined,
  useZebraStyles: false,
};

DataTable.propTypes = {
  /**
   * @type {Object.<Object, *>}
   * The `rows` prop is where you provide us with a list of all the rows that
   * you want to render in the table. The only hard requirement is that this
   * is an array of objects, and that each object has a unique `id` field
   * available on it.
   */
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,

  /**
   * @type {Object.<Object, *>}
   * The `headers` prop represents the order in which the headers should
   * appear in the table. We expect an array of objects to be passed in, where
   * `key` is the name of the key in a row object, and `header` is the name of
   * the header.
   */
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    })
  ).isRequired,

  /** @type {function(rows: Array, headers: Array, ...props)}
   * render function for the contents of the table.
   */
  render: PropTypes.func,

  /** @type {bool} Defines whether the table is sortable. */
  isSortable: PropTypes.bool,

  /**
   * @type {func} Optional hook to manually control sorting of the rows.
   */
  sortRow: PropTypes.func,

  /**
   * @type {func} Optional hook to manually control filtering of the rows from the
   * TableToolbarSearch component
   */
  filterRows: PropTypes.func,

  /** @type {bool} Defines whether the table is selectable. */
  isSelectable: PropTypes.bool,

  /** @type {string} Defines missing data in a cell replaced with a character. */
  missingDataCharacter: PropTypes.string,

  /** @type {bool} Defines whether the table uses zebra styles. */
  useZebraStyles: PropTypes.bool,
};

export const { defaultProps, propTypes } = DataTable;

DataTable.Table = Table;
DataTable.TableActionList = TableActionList;
DataTable.TableBatchAction = TableBatchAction;
DataTable.TableBatchActions = TableBatchActions;
DataTable.TableBody = TableBody;
DataTable.TableCell = TableCell;
DataTable.TableContainer = TableContainer;
DataTable.TableExpandHeader = TableExpandHeader;
DataTable.TableExpandRow = TableExpandRow;
DataTable.TableExpandedRow = TableExpandedRow;
DataTable.TableHead = TableHead;
DataTable.TableHeader = TableHeader;
DataTable.TableOverflowCell = TableOverflowCell;
DataTable.TableRow = TableRow;
DataTable.TableSelectAll = TableSelectAll;
DataTable.TableSelectRow = TableSelectRow;
DataTable.TableToolbar = TableToolbar;
DataTable.TableToolbarAction = TableToolbarAction;
DataTable.TableToolbarContent = TableToolbarContent;
DataTable.TableToolbarSearch = TableToolbarSearch;
DataTable.TableToolbarMenu = TableToolbarMenu;
DataTable.TableToolbarDownload = TableToolbarDownload;

export {
  DataTable,
  Table,
  TableActionList,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableOverflowCell,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarDownload,
};
