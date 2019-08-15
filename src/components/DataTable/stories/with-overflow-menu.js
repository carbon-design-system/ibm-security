/**
 * @file Data table with overflow menu story.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
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
import { headers, missingDataCharacter, rows } from '../_mocks_';

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
                    {cell.value ? cell.value : missingDataCharacter}
                  </TableCell>
                ))}

                <TableOverflowCell>
                  <OverflowMenu
                    flipped
                    floatingMenu
                    ariaLabel="Actions"
                    menuOffsetFlip={menu => ({ left: 61 - menu.clientWidth })}
                  >
                    <OverflowMenuItem
                      itemText="Action 1"
                      onClick={action('Overflow action clicked')}
                    />
                    <OverflowMenuItem
                      itemText="Action 2"
                      onClick={action('Overflow action clicked')}
                    />
                    <OverflowMenuItem
                      itemText="Action 3"
                      onClick={action('Overflow action clicked')}
                    />
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
