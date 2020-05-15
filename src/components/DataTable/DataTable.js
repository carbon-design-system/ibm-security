/**
 * @file Data table.
 * @copyright IBM Security 2019-2020
 */

import React from 'react';

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

function DataTable({ ...other }) {
  return (
    <div className={namespace}>
      <CarbonDataTable {...other} />
    </div>
  );
}

DataTable.defaultProps = {
  ...CarbonDataTable.defaultProps,
};

DataTable.propTypes = {
  ...CarbonDataTable.propTypes,
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
