/**
 * @file Table toolbar button for downloading table data as CSV
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import Download16 from '@carbon/icons-react/lib/download/16';
import { ExportToCsv } from 'export-to-csv';
import IconButton from '../IconButton';

const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  useTextFile: false,
  useBom: true,
};

const TableToolbarDownload = ({ headers, rows, title, filename }) => {
  const csvRows = rows.map(row => {
    const newRow = {};
    headers.forEach(({ key }) => {
      newRow[key] = row[key];
    });
    return newRow;
  });

  if (title) {
    options.showTitle = true;
    options.title = title;
  }
  options.filename = filename;

  options.headers = headers.map(({ header }) => header);

  const csvExporter = new ExportToCsv(options);

  return (
    <IconButton
      size="lg"
      renderIcon={Download16}
      onClick={() => {
        csvExporter.generateCsv(csvRows);
      }}
    />
  );
};

TableToolbarDownload.propTypes = {
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

  /** @type {string} the title used for the generated CSV table */
  title: PropTypes.string,

  /** @type {string} the filename used for the generated CSV file */
  filename: PropTypes.string,
};

TableToolbarDownload.defaultProps = {
  title: '',
  filename: 'DataTable',
};

export default TableToolbarDownload;
