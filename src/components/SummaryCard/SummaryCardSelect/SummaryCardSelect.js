/**
 * @file Summary card select.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { string } from 'prop-types';
import React from 'react';

import Checkbox from '../../Checkbox';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as summaryCardNamespace } from '../SummaryCard';

export const namespace = appendComponentNamespace(
  summaryCardNamespace,
  'select'
);

const SummaryCardSelect = ({ className, ...props }) => (
  <div className={namespace}>
    <Checkbox
      className={classnames(`${namespace}__checkbox`, className)}
      {...props}
    />
  </div>
);

SummaryCardSelect.propTypes = {
  /** Provide an optional class to be applied to the containing node */
  className: string,
};

export default SummaryCardSelect;
