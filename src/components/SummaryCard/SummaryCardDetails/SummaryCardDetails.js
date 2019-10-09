/**
 * @file Summary card details.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Transition from '../../Transition';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-details');

const transitionSegment = 150; // duration--moderate-01

const SummaryCardDetails = ({ ariaLabel, children, className, isOpen }) => (
  <Transition
    appearTimeout={transitionSegment * 3}
    className={`${namespace}__overlay`}
    enterTimeout={transitionSegment * 3}
    leaveTimeout={transitionSegment * 3}
  >
    {isOpen && (
      <div
        aria-labelledby={ariaLabel}
        className={classnames(namespace, className, `${namespace}__overlay`)}
        role="dialog"
      >
        {children}
      </div>
    )}
  </Transition>
);

SummaryCardDetails.propTypes = {
  /** @type {string} The `ariaLabel` must match the `id` of the corresponding `SummaryCardAction that triggers this `SummaryCardDetails` component. */
  ariaLabel: PropTypes.string.isRequired,

  /** @type {object} The children rendered in the details content area. */
  children: PropTypes.node.isRequired,

  /** @type {string} Extra class names to add. */
  className: PropTypes.string,

  /** @type {string} Whether or not the content area is shown. */
  isOpen: PropTypes.bool,
};

SummaryCardDetails.defaultProps = {
  className: '',
  isOpen: false,
};

export default SummaryCardDetails;
