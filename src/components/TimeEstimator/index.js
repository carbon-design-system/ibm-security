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
 * Time estimators display the estimated amount of time it takes to complete a flow.
 */
const TimeEstimator = ({ children, className, ...other }) => (
  <span className={classnames(namespace, className)} {...other}>
    <Time16 className={`${namespace}__icon`} />
    {children}
  </span>
);

TimeEstimator.propTypes = {
  /** Provide the contents of the `TimeEstimator` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

export default TimeEstimator;
