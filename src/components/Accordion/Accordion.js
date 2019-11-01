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

const Accordion = ({ className, alignment, ...rest }) => {
  const isRightAligned = alignment === 'right';

  const accordionClasses = classnames(namespace, className, {
    [`${namespace}--right`]: isRightAligned,
    [`${namespace}--left`]: !isRightAligned,
  });

  return (
    <CarbonAccordion
      className={accordionClasses}
      alignment={alignment}
      {...rest}
    />
  );
};

Accordion.defaultProps = {
  ...defaultProps,
  className: '',
  alignment: 'left',
};

Accordion.propTypes = {
  ...propTypes,

  /** Extra class names to add. */
  className: PropTypes.string,

  /** Specify the alignment of the accordion heading title and chevron. */
  alignment: PropTypes.oneOf(['left', 'right']),
};

export default Accordion;
