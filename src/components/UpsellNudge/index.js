/**
 * @file Upsell nudge.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, elementType, node, shape, string } from 'prop-types';
import React, { createElement } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

import Button from '../Button';

export const namespace = getComponentNamespace('upsell-nudge');

/**
 * Upsell nudges are in-context cards that enables pivoting to purchase or upgrades.
 */
const UpsellNudge = ({
  button,
  children,
  className,
  element,
  light,
  renderIcon: Icon,
  title,
  ...other
}) => (
  <div
    className={classnames(namespace, className, {
      [`${namespace}--light`]: light,
    })}
    {...other}
  >
    <div className={`${namespace}__container`}>
      <Icon />

      {createElement(element, { className: `${namespace}__title` }, title)}

      {children && <div className={`${namespace}__content`}>{children}</div>}
    </div>

    <Button className={`${namespace}__button`} kind="ghost" {...button} />
  </div>
);

const { propTypes } = Button;

UpsellNudge.propTypes = {
  /** Specify the text of the title */
  title: string.isRequired,

  /** Provide the icon to render */
  renderIcon: propTypes.renderIcon.isRequired,

  /** Provide the props of the `Button` */
  button: shape(propTypes).isRequired,

  /** Specify the content of the `UpsellNudge` */
  children: node,

  /** Specifiy whether or not to use the light variant */
  light: bool,

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

UpsellNudge.defaultProps = {
  children: null,
  light: false,
  element: 'h3',
  className: null,
};

export default UpsellNudge;
