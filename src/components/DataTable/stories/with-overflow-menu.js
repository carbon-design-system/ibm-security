/**
 * @file Data table with overflow menu story.
 * @copyright IBM Security 2019
 */

import React from 'react';

import {
  DataTable,
  OverflowMenu,
  OverflowMenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableOverflowCell,
  TableRow,
} from '../../..';

import { headers, rows } from '../_mocks_';

const overflowStory = props => (
  <DataTable
    rows={rows}
    headers={headers}
    {...props}
    render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
      <TableContainer>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })} key={header.key}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })} key={row.id}>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>
                    {cell.value ? cell.value : '–'}
                  </TableCell>
                ))}

                <TableOverflowCell>
                  <OverflowMenu flipped>
                    {new Array(3).fill().map((itemText = 'Action', index) => {
                      const key = `overflowMenuItem__index`;

                      return (
                        <OverflowMenuItem
                          key={key}
                          itemText={`${itemText} ${index + 1}`}
                          primaryFocus={index === 0}
                        />
                      );
                    })}
                  </OverflowMenu>
                </TableOverflowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);

export default overflowStory;
