/**
 * @file Time estimator.
 * @copyright IBM Security 2019
 */

import Time16 from '@carbon/icons-react/lib/time/16';

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('time-estimator');

/**
 * Time estimators estimate the amount of time it takes to complete a flow.
 */
const TimeEstimator = ({ children, className, ...props }) => (
  <span className={classnames(namespace, className)} {...props}>
    <Time16 className={`${namespace}__icon`} />
    {children}
  </span>
);

TimeEstimator.propTypes = {
  children: node.isRequired,
  className: string,
};

export default TimeEstimator;
