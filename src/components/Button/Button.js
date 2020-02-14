/**
 * @file Button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import CarbonButton from 'carbon-components-react/lib/components/Button';
import InlineLoading from '../InlineLoading';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('button');

const { defaultProps, propTypes } = CarbonButton;

const Button = forwardRef(
  ({ className, disabled, loading, kind, renderIcon, size, ...other }, ref) => {
    const isGhostDanger = kind === 'ghost-danger';
    const isLarge = size === 'large';

    const buttonClasses = classnames(namespace, className, {
      [`${namespace}--ghost-danger`]: isGhostDanger,
      [`${namespace}--large`]: isLarge,
      [`${namespace}--loading`]: loading,
    });

    return (
      <CarbonButton
        className={buttonClasses}
        disabled={disabled || loading}
        kind={isGhostDanger || loading ? 'ghost' : kind}
        ref={ref}
        renderIcon={loading ? InlineLoading : renderIcon}
        size={!isLarge ? size : null}
        {...other}
      />
    );
  }
);

Button.displayName = 'Button';

Button.defaultProps = {
  ...defaultProps,
  disabled: false,
  loading: false,
  renderIcon: undefined,
};

Button.propTypes = {
  ...propTypes,

  /** @type {boolean} Whether or not the button is disabled. */
  disabled: PropTypes.bool,

  /** @type {boolean} Whether or not the button is in a loading state. While loading, the button is disabled & icons provided via the `renderIcon` prop will not be shown. */
  loading: PropTypes.bool,

  /** @type {Function|object} Optional prop to allow overriding the icon rendering. Can be a React component class. */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  // It's not possible to add to Carbon's values here, so the `PropType` is recreated to include the large variant.
  size: PropTypes.oneOf(['default', 'field', 'large', 'small']),
};

export default Button;
