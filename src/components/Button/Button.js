/**
 * @file Button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CarbonButton from 'carbon-components-react/lib/components/Button';

import { getComponentNamespace } from '../../globals/namespace';
import deprecatedProp from '../../globals/prop-types';

export const namespace = getComponentNamespace('button');

// TODO: V3 - Remove deprecated props `largeText`.

const Button = ({ className, largeText, size, ...other }) => {
  const isSize = value => size === value;
  const isLarge = isSize('large') || largeText || isSize('lg') || isSize('xlg');

  return (
    <CarbonButton
      className={classnames(namespace, className, {
        [`${namespace}--large`]: isLarge,
      })}
      size={!isLarge ? size : null}
      {...other}
    />
  );
};

/* eslint-disable react/require-default-props */
Button.defaultProps = {
  largeText: null,
  icon: 'None',
  kind: 'primary',
  disabled: false,
  size: 'default',
};

Button.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,

  /**
   * Choose an icon type to better communicate what the button does
   */
  icon: PropTypes.oneOf(['None', 'Add16', 'Add24', 'Search16', 'Search24']),

  /**
   * Choose button type
   */
  kind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']),

  /**
   * Property to disable the button
   */
  disabled: PropTypes.bool,

  /**
   * Icon description for screen readers, if using icons
   */
  iconDescription: PropTypes.string,

  /**
   * Choose the size of the button
   */
  size: PropTypes.oneOf(['default', 'field', 'large', 'small']),

  largeText: deprecatedProp('size="large"', PropTypes.bool),
};

export default Button;
