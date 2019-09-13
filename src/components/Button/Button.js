/**
 * @file Button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ButtonTypes } from 'carbon-components-react/lib/prop-types/types';
import CarbonButton from 'carbon-components-react/lib/components/Button';
import deprecate from 'carbon-components-react/lib/prop-types/deprecate';

import { getComponentNamespace } from '../../globals/namespace';

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
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary',
  largeText: null,
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify how the button itself should be rendered.
   * Make sure to apply all props to the root node and render children appropriately
   */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Deprecated in v10 in favor of `size`.
   * Specify whether the Button should be a small variant
   */
  small: deprecate(
    PropTypes.bool,
    `\nThe prop \`small\` for Button has been deprecated in favor of \`size\`. Please use \`size="small"\` instead.`
  ),

  /**
   * Specify the kind of Button you want to create
   */
  kind: ButtonTypes.buttonKind,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: props => {
    if (props.renderIcon && !props.children && !props.iconDescription) {
      return new Error(
        'renderIcon property specified without also providing an iconDescription property.'
      );
    }
    return undefined;
  },

  /**
   * Specify if the button is an icon-only button
   */
  hasIconOnly: PropTypes.bool,

  /**
   * Specify the direction of the tooltip for icon-only buttons.
   * Can be either top, right, bottom, or left.
   */
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Specify the alignment of the tooltip to the icon-only button.
   * Can be one of: start, center, or end.
   */
  tooltipAlignment: PropTypes.oneOf(['start', 'center', 'end']),

  /** @type {string} Specify the size of the button from list of available sizes. */
  size: PropTypes.oneOf(['default', 'field', 'large', 'small']),

  /** @type {boolean} Specify whether the text is large. */
  largeText: deprecate(
    PropTypes.bool,
    `\nThe prop \`largeText\` for Button has been deprecated in favor of \`size\`. Please use \`size="large"\` instead.`
  ),
};
/* eslint-enable react/require-default-props */

export default Button;
