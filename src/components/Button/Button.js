/**
 * @file Button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { bool, oneOf } from 'prop-types';
import React from 'react';

import CarbonButton from 'carbon-components-react/lib/components/Button';

import { getComponentNamespace } from '../../globals/namespace';
import deprecatedProp from '../../globals/prop-types';

export const namespace = getComponentNamespace('button');

const { defaultProps, propTypes } = CarbonButton;

// TODO: V3 - Remove deprecated props `largeText`.

const Button = ({ className, largeText, size, kind, ...other }) => {
  const isSize = value => size === value;
  const isLarge = isSize('large') || largeText || isSize('lg') || isSize('xlg');

  const isKind = value => kind === value;

const isGhostDanger = kind === 'ghost-danger';


  return (
    <CarbonButton
      className={classnames(namespace, className, {
        [`${namespace}--large`]: isLarge,
        [`${namespace}--ghost-danger`]: isGhostDanger,
      })}
      size={!isLarge ? size : null}
      kind={!isGhostDanger ? kind : 'ghost'}
      {...other}
    />
  );
};

Button.defaultProps = {
  ...defaultProps,
  largeText: null,
};

Button.propTypes = {
  ...propTypes,

  // It's not possible to add to Carbon's values here, so the `PropType` is recreated to include the large variant.
  size: oneOf(['default', 'field', 'large', 'small']),
  largeText: deprecatedProp('size="large"', bool),
};

export default Button;
