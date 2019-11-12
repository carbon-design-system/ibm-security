/**
 * @file Summary card header.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card__header');

const SummaryCardHeader = ({ className, title, status }) => (
  <div className={classnames(namespace, className)}>
    <h2 className={`${namespace}__title`}>{title}</h2>
    {status}
  </div>
);

SummaryCardHeader.propTypes = {
  /** @type {string} Extra class names to add. */
  className: PropTypes.string,

  /** @type {node} The status of the Card. */
  status: PropTypes.node,

  /** @type {string} The title of the summary card. */
  title: PropTypes.string.isRequired,
};

SummaryCardHeader.defaultProps = {
  className: '',
  status: undefined,
};

export default SummaryCardHeader;
