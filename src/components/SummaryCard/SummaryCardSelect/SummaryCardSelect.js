/**
 * @file Summary card select.
 * @copyright IBM Security 2019
 */

import React from 'react';

import Checkbox from '../../Checkbox';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardNamespace } from '../SummaryCard';

export const namespace = appendComponentNamespace(
  summaryCardNamespace,
  'select'
);

const SummaryCardSelect = ({ ...props }) => (
  <div className={namespace}>
    <Checkbox labelText="Select" {...props} />
  </div>
);

export default SummaryCardSelect;
