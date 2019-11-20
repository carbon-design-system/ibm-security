/**
 * @file Summary card container.
 * @copyright IBM Security 2019
 */

import React, { useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardNamespace } from '../SummaryCard';
import { namespace as summaryCardSelectNamespace } from '../SummaryCardSelect/SummaryCardSelect';

const getSummaryCard = (summaryCards, selectedId) =>
  summaryCards.filter(({ id }) => id === selectedId);

const resetSelectedSummaryCards = state => state([]);

const SummaryCardContainer = ({ render, summaryCards }) => {
  const [
    selectedSummaryCards,
    setSelectedSummaryCards,
  ] = resetSelectedSummaryCards(useState);

  const isSummaryCardSelected = selectedId =>
    getSummaryCard(selectedSummaryCards, selectedId).length > 0;

  const { length: totalSelected } = selectedSummaryCards;

  const getBatchActionProps = ({ ...props }) => ({
    ...props,
    onCancel: () => resetSelectedSummaryCards(setSelectedSummaryCards),
    shouldShowBatchActions: totalSelected > 0,
    totalSelected,
  });

  const onSelect = selectedId =>
    setSelectedSummaryCards(
      isSummaryCardSelected(selectedId)
        ? selectedSummaryCards.filter(({ id }) => id !== selectedId)
        : selectedSummaryCards.concat(getSummaryCard(summaryCards, selectedId))
    );

  const getSelectionProps = ({ id, ...props }) => ({
    ...props,
    checked: isSummaryCardSelected(id),
    id: appendComponentNamespace(summaryCardSelectNamespace, id),
    onChange: () => onSelect(id),
  });

  const renderProps = {
    getBatchActionProps,
    getSelectionProps,
    selectedSummaryCards,
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
