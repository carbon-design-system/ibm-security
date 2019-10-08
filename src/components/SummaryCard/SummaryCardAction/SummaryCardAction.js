/**
 * @file Summary card action.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

import Button from '../../Button';

import { getComponentNamespace } from '../../../globals/namespace/index';

const { prefix } = settings;

const namespace = getComponentNamespace('summary-card-action');

const SummaryCardAction = ({ className, children, ...rest }) => (
  <Button
    {...rest}
    className={classnames(
      namespace,
      className,
      `${prefix}--text-truncate--end`
    )}
    kind="ghost"
    tooltipPosition="bottom"
    tooltipAlignment="center"
  >
    <span>{children}</span>
  </Button>
);

SummaryCardAction.propTypes = {
  /** @type {object} Children of the actions list. */
  children: PropTypes.node,

  /** @type {string} Extra class names to add. */
  className: PropTypes.string,
};

SummaryCardAction.defaultProps = {
  children: null,
  className: '',
};

export default SummaryCardAction;
