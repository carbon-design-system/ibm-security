/**
 * @file Upsell nudge.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { shape, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

import Button from '../Button';

const namespace = getComponentNamespace('upsell-nudge');

/**
 * Upsell nudges are in-context cards that enables pivoting to purchase or upgrades.
 */
const UpsellNudge = ({
  button,
  className,
  description,
  renderIcon: Icon,
  title,
  ...other
}) => (
  <div className={classnames(namespace, className)} {...other}>
    <div className={`${namespace}__content`}>
      <Icon className={`${namespace}__icon`} />
      <div className={`${namespace}__description`}>{description}</div>
      <div className={`${namespace}__title`}>{title}</div>
    </div>
    <Button className={`${namespace}__button`} kind="ghost" {...button} />
  </div>
);

const { propTypes } = Button;

UpsellNudge.propTypes = {
  /** Specify the text of the description */
  description: string.isRequired,

  /** Specify the text of the title */
  title: string.isRequired,

  /** Provide the icon to render */
  renderIcon: propTypes.renderIcon.isRequired,

  /** Provide the props of the `Button` */
  button: shape(propTypes).isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

UpsellNudge.defaultProps = {
  className: null,
};

export default UpsellNudge;
