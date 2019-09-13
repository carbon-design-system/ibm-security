/**
 * @file Combo button item.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import { namespace } from '../ComboButton';

const ComboButtonItem = props => {
  const { ...rest } = props;
  return <span {...rest} className={`${namespace}-item`} />;
};

ComboButtonItem.propTypes = {
  /** @type {string} Text content. */
  children: PropTypes.string.isRequired,

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {boolean} Whether or not an item is disabled. */
  disabled: PropTypes.bool,

  /** @type {string} Descriptive text for icon rendered inside a button. */
  iconDescription: PropTypes.string,

  /** @type {func} Click handler. */
  onClick: PropTypes.func,

  /** @type {boolean} Assign primary focus to a combo button item rendered inside an overflow menu. */
  primaryFocus: PropTypes.bool,

  /** @type {function|object} Icon to render. */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

ComboButtonItem.defaultProps = {
  className: '',
  disabled: false,
  iconDescription: '',
  onClick: () => {},
  primaryFocus: false,
  renderIcon: null,
};

export default ComboButtonItem;
