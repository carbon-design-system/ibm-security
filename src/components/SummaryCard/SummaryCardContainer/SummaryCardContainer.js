/**
 * @file Summary card container.
 * @copyright IBM Security 2019
 */

import { useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardSelectNamespace } from '../SummaryCardSelect/SummaryCardSelect';

const resetSelectedIds = state => state([]);

const SummaryCardContainer = ({ render }) => {
  const [selectedIds, setSelectedIds] = resetSelectedIds(useState);

  const isIdSelected = id => selectedIds.includes(id);

  const onSelect = id =>
    setSelectedIds(
      isIdSelected(id)
        ? selectedIds.filter(selectedId => selectedId !== id)
        : selectedIds.concat(id)
    );

  const getBatchActionProps = ({ ...props }) => {
    const { length: totalSelected } = selectedIds;

    return {
      ...props,
      onCancel: () => resetSelectedIds(setSelectedIds),
      shouldShowBatchActions: totalSelected > 0,
      totalSelected,
    };
  };

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
  };

  return render(renderProps);
};

export default SummaryCardContainer;
