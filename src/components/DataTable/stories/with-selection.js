/**
 * @file Data table with selection story.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { DataTable } from '../../..';
import { headers, missingDataCharacter, rows } from '../_mocks_';

const selectionStory = () => (
  <DataTable
    rows={rows}
    headers={headers}
    missingDataCharacter={missingDataCharacter}
    isSelectable
    isSortable={false}
  />
);

export default selectionStory;
