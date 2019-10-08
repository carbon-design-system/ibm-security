/**
 * @file Summary card body.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { g100 } from '@carbon/themes';

import ScrollGradient from '../../ScrollGradient';
import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-body');

const SummaryCardBody = ({ children, className, scrollGradientColor }) => (
  <div className={classnames(namespace, className)}>
    <ScrollGradient color={scrollGradientColor || g100.uiBackground}>
      {children}
    </ScrollGradient>
  </div>
);

SummaryCardBody.propTypes = {
  /** @type {node} The children rendered in the main content area of the card. */
  children: PropTypes.node.isRequired,

  /** @type {string} Extra class names to add.. */
  className: PropTypes.string,

  /** @type {string} The fade out color (can be any valid css value). */
  scrollGradientColor: PropTypes.string,
};

SummaryCardBody.defaultProps = {
  className: '',
  scrollGradientColor: undefined,
};

export default SummaryCardBody;
