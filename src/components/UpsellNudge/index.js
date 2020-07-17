/**
 * @file Upsell nudge.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { func, node, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('upsell-nudge');

const UpsellNudge = ({
  children,
  className,
  description,
  renderIcon: Icon,
  title,
  ...other
}) => (
  <div className={classnames(namespace, className)} {...other}>
    <Icon className={`${namespace}__icon`} />
    <div className={`${namespace}__description`}>{description}</div>
    <div className={`${namespace}__title`}>{title}</div>
    {children}
  </div>
);

UpsellNudge.defaultProps = {
  children: null,
  className: null,
};

UpsellNudge.propTypes = {
  /** Specify the text of the description */
  description: string.isRequired,

  /** Specify the text of the title */
  title: string.isRequired,

  /** Provide the icon to renderOptional prop to allow overriding the icon rendering */
  renderIcon: func.isRequired,

  /** Provide the contents of the `UpsellNudge` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

export default UpsellNudge;
