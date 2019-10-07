/**
 * @file Summary card body.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-body');

const SummaryCardBody = ({ children, className }) => (
  <div className={classnames(namespace, className)}>{children}</div>
);

SummaryCardBody.propTypes = {
  /** @type {node} The children are rendered in the main content area of the card. */
  children: PropTypes.node.isRequired,

  /** @type {string} The class. */
  className: PropTypes.string,
};

SummaryCardBody.defaultProps = {
  className: '',
};

export default SummaryCardBody;
