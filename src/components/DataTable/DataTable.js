/**
 * @file Data table.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';

import CarbonDataTable from 'carbon-components-react/lib/components/DataTable';

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
  render,
  rows,
  sortRow,

  useZebraStyles,
  ...other
}) => (
  <div className={namespace}>
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
  </div>
);

DataTable.defaultProps = {
  isSortable: true,
  isSelectable: true,
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

  /** @type {bool} Defines whether the table uses zebra styles. */
  useZebraStyles: PropTypes.bool,
};

export const { defaultProps, propTypes } = DataTable;

// Object for managing which `DataTable` subcomponents should be exported.
export const dataTableExports = {
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

// Exports each proxied subcomponent to the `DataTable` object.
Object.keys(dataTableExports).forEach(dataTableExport => {
  DataTable[dataTableExport] = dataTableExports[dataTableExport];
});

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
