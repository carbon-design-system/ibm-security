/**
 * @file Data table default story.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { DataTableSkeleton } from '../../..';
import { headers, rows } from '../_mocks_';

const skeletonStory = () => <DataTableSkeleton headers={headers} rows={rows} />;

export default skeletonStory;
