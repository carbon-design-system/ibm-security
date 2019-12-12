/**
 * @file Icon.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { func, number, object, oneOfType, string } from 'prop-types';
import React, { cloneElement } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const sizeDefaultProp = 20;
const sizePropType = oneOfType([number, string]);

const renderIconDefaultProp = null;
const renderIconPropType = oneOfType([func, object]);

/**
 * Icon component.
 */
const Icon = ({
  className,
  path,
  renderIcon: RenderIcon,
  size,
  title,
  viewBox,
  ...other
}) => {
  const iconProps = {
    'aria-hidden': 'true',
    className: classnames(getComponentNamespace('icon'), className),
    focusable: false,
    preserveAspectRatio: 'xMidYMid meet',
    style: {
      willChange: 'transform',
    },
    ...other,
  };

  if (path) {
    return (
      <svg {...iconProps} height={size} width={size} viewBox={viewBox}>
        {title && <title>{title}</title>}
        <path d={path} />
      </svg>
    );
  }

  return RenderIcon ? cloneElement(<RenderIcon />, iconProps) : RenderIcon;
};

Icon.defaultProps = {
  className: '',
  path: null,
  renderIcon: renderIconDefaultProp,
  size: sizeDefaultProp,
  title: undefined,
  viewBox: '0 0 32 32',
};

Icon.propTypes = {
  /** @type {string} Extra classes to add. */
  className: string,

  /** @type {string} Path. */
  path: string,

  /** @type {function|object} Icon to render. */
  renderIcon: renderIconPropType,

  /** @type {number|string} Size. */
  size: sizePropType,

  /** @type {string} Title. */
  title: string,

  /** @type {string} The SVG viewBox property. */
  viewBox: string,
};

export default Icon;

export {
  renderIconDefaultProp,
  renderIconPropType,
  sizeDefaultProp,
  sizePropType,
};
