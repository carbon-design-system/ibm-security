/**
 * @file Summary card container.
 * @copyright IBM Security 2019
 */

import { useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardSelectNamespace } from '../SummaryCardSelect/SummaryCardSelect';

const SummaryCardContainer = ({ render }) => {
  const [ids, setIds] = useState([]);

  const onSelect = id =>
    setIds(
      ids.includes(id) ? ids.filter(cardId => cardId !== id) : ids.concat(id)
    );

  const getBatchActionProps = ({ ...props }) => ({ ...props });

  const getSelectionProps = ({ id, ...props }) => ({
    ...props,
    id: appendComponentNamespace(summaryCardSelectNamespace, id),
    onChange: () => onSelect(id),
  });

  const renderProps = {
    getBatchActionProps,
    getSelectionProps,
  };

  return render(renderProps);
};

export default SummaryCardContainer;
