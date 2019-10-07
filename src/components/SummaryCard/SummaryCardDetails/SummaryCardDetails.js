/**
 * @file Summary card details.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { g100 } from '@carbon/themes';

import ScrollGradient from '../../ScrollGradient';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-details');

const SummaryCardDetails = ({ children, className }) => (
  <ScrollGradient color={g100.ui01}>
    <div className={classnames(namespace, className)}>{children}</div>
  </ScrollGradient>
);

SummaryCardDetails.propTypes = {
  /** @type {node} The children are rendered in the main content area of the card. */
  children: PropTypes.node.isRequired,

  /** @type {string} The class. */
  className: PropTypes.string,
};

SummaryCardDetails.defaultProps = {
  className: '',
};

export default SummaryCardDetails;
