/**
 * @file Summary card batch actions.
 * @copyright IBM Security 2019
 */

import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { TableBatchActions } from '../../DataTable';

import { namespace as summaryCardNamespace } from '../SummaryCard';

const SummaryCardBatchActions = ({ ...props }) => (
  <TableBatchActions
    className={appendComponentNamespace(summaryCardNamespace, 'batch-actions')}
    {...props}
  />
);

export default SummaryCardBatchActions;
