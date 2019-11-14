/**
 * @file Summary card batch actions.
 * @copyright IBM Security 2019
 */

import React from 'react';

const SummaryCardBatchActions = ({ shouldShowBatchActions, ...props }) =>
  shouldShowBatchActions && <div {...props} />;

export default SummaryCardBatchActions;
