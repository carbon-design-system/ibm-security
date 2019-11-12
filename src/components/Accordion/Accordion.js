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

const Accordion = ({ className, align, ...other }) => (
  <CarbonAccordion
    className={classnames(namespace, className, {
      [`${namespace}--${align}`]: align,
    })}
    {...other}
  />
);

Accordion.defaultProps = {
  ...defaultProps,
  className: '',
  align: 'start',
};

Accordion.propTypes = {
  ...propTypes,

  /** Extra class names to add. */
  className: PropTypes.string,

  /** Specify the alignment of the accordion heading title and chevron. */
  align: PropTypes.oneOf(['start', 'end']),
};

export default Accordion;
