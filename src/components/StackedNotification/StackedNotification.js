/**
 * @file Stacked notification.
 * @copyright IBM Security 2019
 */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { ToastNotification } from '../Notification';
import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('stacked-notification');

const StackedNotification = ({
  onCloseButtonClick,
  iconDescription,
  className,
  caption,
  subtitle,
  title,
  hideCloseButton,
  ...other
}) => {
  const classes = classnames(namespace, className);

  return (
    <ToastNotification
      className={classes}
      kind="info"
      notificationType="toast"
      title={title}
      subtitle={subtitle}
      caption={caption}
      iconDescription={iconDescription}
      onClick={onCloseButtonClick}
      {...other}
    />
  );
};

StackedNotification.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
  role: PropTypes.string,
  caption: PropTypes.node,
  onCloseButtonClick: PropTypes.func,
  iconDescription: PropTypes.string.isRequired,
  hideCloseButton: PropTypes.bool,
};

StackedNotification.defaultProps = {
  caption: '',
  children: '',
  className: '',
  role: 'alert',
  onCloseButtonClick: () => {},
  hideCloseButton: false,
};

export default StackedNotification;
