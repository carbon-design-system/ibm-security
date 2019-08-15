/**
 * @file Data table default story.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { DataTable } from '../../..';
import { headers, missingDataCharacter, rows } from '../_mocks_';

const defaultStory = () => (
  <DataTable
    rows={rows}
    headers={headers}
    missingDataCharacter={missingDataCharacter}
    isSelectable={false}
    isSortable={false}
  />
);

export default defaultStory;
