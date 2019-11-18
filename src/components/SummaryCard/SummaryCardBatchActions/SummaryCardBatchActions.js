/**
 * @file Summary card batch actions.
 * @copyright IBM Security 2019
 */

import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { TableBatchActions } from '../../DataTable';

import { namespace as summaryCardNamespace } from '../SummaryCard';

const translationKeys = [
  'security.summary-card.batch.cancel',
  'security.summary-card.batch.items.selected',
  'security.summary-card.batch.item.selected',
];

const transformedTranslationKeys = {};

TableBatchActions.translationKeys.forEach((translationKey, index) => {
  transformedTranslationKeys[translationKey] = translationKeys[index];
});

const translateWithId = (id, state) => {
  console.log(id);
  console.log(state);

  return transformedTranslationKeys[id];
};

const SummaryCardBatchActions = ({ translateWithId: t, ...props }) => (
  <TableBatchActions
    className={appendComponentNamespace(summaryCardNamespace, 'batch-actions')}
    translateWithId={(id, state) => t(translateWithId(id), state)}
    {...props}
  />
);

SummaryCardBatchActions.translationKeys = translationKeys;

export default SummaryCardBatchActions;
