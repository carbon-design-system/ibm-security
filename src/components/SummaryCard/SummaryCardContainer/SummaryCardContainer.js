/**
 * @file Summary card container.
 * @copyright IBM Security 2019
 */

import React, { useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardNamespace } from '../SummaryCard';
import { namespace as summaryCardSelectNamespace } from '../SummaryCardSelect/SummaryCardSelect';

const resetSelectedIds = state => state([]);

const SummaryCardContainer = ({ render, summaryCards }) => {
  const [selectedIds, setSelectedIds] = resetSelectedIds(useState);

  const isIdSelected = id => selectedIds.includes(id);
  const { length: totalSelected } = selectedIds;

  const getBatchActionProps = ({ ...props }) => ({
    ...props,
    onCancel: () => resetSelectedIds(setSelectedIds),
    shouldShowBatchActions: totalSelected > 0,
    totalSelected,
  });

  const onSelect = id =>
    setSelectedIds(
      isIdSelected(id)
        ? selectedIds.filter(selectedId => selectedId !== id)
        : selectedIds.concat(id)
    );

  const getSelectionProps = ({ id, ...props }) => ({
    ...props,
    checked: isIdSelected(id),
    id: appendComponentNamespace(summaryCardSelectNamespace, id),
    onChange: () => onSelect(id),
  });

  const renderProps = {
    getBatchActionProps,
    getSelectionProps,
    selectedIds,
    summaryCards,
  };

  return (
    <div
      className={appendComponentNamespace(summaryCardNamespace, 'container')}
    >
      {render(renderProps)}
    </div>
  );
};

export default SummaryCardContainer;
