/**
 * @file LoadingMessage.
 * @copyright IBM Security 2019
 */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Loading from '../';

const LoadingMessage = ({
  active,
  children,
  className,
  small,
  withOverlay,
  ...other
}) => {
  const loading = <Loading active={active} small={small} withOverlay={false} />;

  const overlayClasses = classnames('bx--loading-overlay', className, {
    'bx--loading-overlay--stop': !active,
  });

  return withOverlay ? (
    <div className={overlayClasses} {...other}>
      {loading}
      {children}
    </div>
  ) : (
    loading
  );
};

const propTypes = {
  /** @type {bool} Active loading icon. */
  active: PropTypes.bool,
  /** @type {string} A class. */
  className: PropTypes.string,
  /** @type {bool} Overlay all other elements. */
  withOverlay: PropTypes.bool,
  /** @type {bool} Small loading view. */
  small: PropTypes.bool,

  /** @type {ReactNode|Object<ReactNode>} Children. */
  children: PropTypes.node,
};

const defaultProps = {
  active: true,
  className: '',
  withOverlay: true,
  small: false,
  children: null,
};

LoadingMessage.defaultProps = defaultProps;
LoadingMessage.propTypes = propTypes;

export default LoadingMessage;
