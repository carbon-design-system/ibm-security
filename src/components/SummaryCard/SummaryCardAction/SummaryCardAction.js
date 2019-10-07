/**
 * @file Summary card action.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../Button';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-action');

const SummaryCardAction = ({ className, children, ...rest }) => (
  <Button
    {...rest}
    className={classnames(namespace, className)}
    tooltipPosition="bottom"
    tooltipAlignment="center"
  >
    {children}
  </Button>
);

SummaryCardAction.propTypes = {
  /** @type {string} Extra class names to add. */
  className: PropTypes.string,

  /** @type {object} Children of the actions list. */
  children: PropTypes.node.isRequired,

  href: PropTypes.string,

  onClick: PropTypes.func,
};

SummaryCardAction.defaultProps = {
  className: '',
  href: undefined,
  onClick: () => {},
};

export default SummaryCardAction;
