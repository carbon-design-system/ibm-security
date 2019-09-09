/**
 * @file Combo button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import OverflowMenuItem from '../../OverflowMenuItem';

import { getComponentNamespace } from '../../../globals/namespace';

export const namespace = getComponentNamespace('combo-button__item');

// Since this is meant to be used as a child of <ComboButton>, which itself
// is a wrapper around <OverflowMenu>, it *must* be a class (and not functional)
// component. OverflowMenu implicitly expects its children to be class
// components, since it injects a "ref" prop on each one (for handling
// keyboard focus).

/* eslint-disable react/prefer-stateless-function */
class ComboButtonItem extends Component {
  render() {
    const { className, ...rest } = this.props;
    return (
      <OverflowMenuItem
        className={classnames(className, namespace)}
        {...rest}
      />
    );
  }
}
/* eslint-enable */

ComboButtonItem.propTypes = {
  /** @type {string} Extra classes to add. */
  className: PropTypes.string,
};

ComboButtonItem.defaultProps = {
  className: '',
};

export default ComboButtonItem;
