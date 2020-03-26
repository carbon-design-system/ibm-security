/**
 * @file Step indicator.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ProgressIndicator, ProgressStep } from '../ProgressIndicator';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('step-indicator');
const stepNamespace = getComponentNamespace('step');

const Step = props => {
  const classes = classnames(stepNamespace, props.className);

  // Filtering props.
  const stepProps = {
    className: classes,
    current: props.current,
    complete: props.complete,
    description: props.description,
    disabled: props.disabled,
    invalid: props.invalid,
    label: props.label,
  };

  const defaultRenderLabel = stepProps => <p {...stepProps} />;

  return <ProgressStep {...stepProps} renderLabel={defaultRenderLabel} />;
};

const StepIndicator = ({ className, ...other }) => {
  const classes = classnames(namespace, className);

  return <ProgressIndicator className={classes} {...other} />;
};

Step.defaultProps = {
  className: '',
  complete: null,
  current: null,
  description: null,
  disabled: null,
  invalid: null,
};

Step.propTypes = {
  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {boolean} Boolean flag for complete state of a step. */
  complete: PropTypes.bool,

  /** @type {boolean} Boolean flag for current state of a step. */
  current: PropTypes.bool,

  /** @type {string} A description for the step. */
  description: PropTypes.string,

  /** @type {boolean} Boolean flag for disabled state of a step. */
  disabled: PropTypes.bool,

  /** @type {boolean} Specify whether the step is invalid. */
  invalid: PropTypes.bool,

  /** @type {string} A label for a step. */
  label: PropTypes.string.isRequired,
};

StepIndicator.defaultProps = {
  className: '',
  currentIndex: 0,
};

StepIndicator.propTypes = {
  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {number} Index of the current step. */
  currentIndex: PropTypes.number,
};

export { StepIndicator, Step };
