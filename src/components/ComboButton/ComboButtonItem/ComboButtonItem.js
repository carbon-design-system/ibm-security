/**
 * @file Combo button item.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { namespace } from '../ComboButton';

import Button from '../../Button';
import OverflowMenuItem from '../../OverflowMenuItem';

const ComboButtonItem = props => {
  const { className, ...rest } = props;
  return (
    <span className={classnames(className, `${namespace}-item`)} {...rest} />
  );
};

ComboButtonItem.propTypes = {
  ...Button.defaultProps,
  ...OverflowMenuItem.defaultProps,

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,
};

ComboButtonItem.defaultProps = {
  ...Button.defaultProps,
  ...OverflowMenuItem.defaultProps,
  className: '',
};

export default ComboButtonItem;
