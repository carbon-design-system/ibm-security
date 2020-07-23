/**
 * @file Data table.
 * @copyright IBM Security 2019 - 2020
 */

import CarbonDataTable from 'carbon-components-react/lib/components/DataTable';
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
