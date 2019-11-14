/**
 * @file Summary card container.
 * @copyright IBM Security 2019
 */

import { useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardSelectNamespace } from '../SummaryCardSelect/SummaryCardSelect';

const SummaryCardContainer = ({ render }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const onSelect = id =>
    setSelectedIds(
      selectedIds.includes(id)
        ? selectedIds.filter(selectedId => selectedId !== id)
        : selectedIds.concat(id)
    );

  const getBatchActionProps = ({ ...props }) => ({
    ...props,
    shouldShowBatchActions: selectedIds.length > 0,
    totalSelected: selectedIds.length,
  });

  const getSelectionProps = ({ id, ...props }) => ({
    ...props,
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
