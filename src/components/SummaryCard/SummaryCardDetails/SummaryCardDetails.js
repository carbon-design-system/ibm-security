/**
 * @file Summary card details.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-details');

const SummaryCardDetails = ({ className, children }) => (
  <div className={classnames(namespace, className)}>{children}</div>
);

SummaryCardDetails.propTypes = {
  /** @type {object} The children rendered in the details content area.. */
  children: PropTypes.node.isRequired,

  /** @type {string} Extra class names to add. */
  className: PropTypes.string,
};

SummaryCardDetails.defaultProps = {
  className: '',
};

export default SummaryCardDetails;
