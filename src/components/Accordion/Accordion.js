/**
 * @file Accordion.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CarbonAccordion from 'carbon-components-react/lib/components/Accordion';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('accordion');

const { defaultProps, propTypes } = CarbonAccordion;

const Accordion = ({ className, right, ...rest }) => {
  const accordionClasses = classnames(namespace, className, {
    [`${namespace}--right`]: right,
  });

  return (
    <CarbonAccordion className={accordionClasses} right={right} {...rest} />
  );
};

Accordion.defaultProps = {
  ...defaultProps,
  className: '',
  right: false,
};

Accordion.propTypes = {
  ...propTypes,

  /** Extra class names to add. */
  className: PropTypes.string,

  /** Whether or not the accordion is right aligned. */
  right: PropTypes.bool,
};

export default Accordion;
