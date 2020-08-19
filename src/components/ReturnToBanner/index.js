/**
 * @file 'Return to' banner.
 * @copyright IBM Security 2020
 */

import { ArrowLeft16 } from '@carbon/icons-react';

import classnames from 'classnames';
import dataUri from 'data-uri.macro';
import { node, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

import Icon from '../Icon';
import Link from '../Link';

const namespace = getComponentNamespace('return-to-banner');

/**
 * The 'Return to' banner is a form of navigation for pivoting from within one application to another.
 */
function ReturnToBanner({
  className,
  children,
  href,
  labelText,
  view,
  ...other
}) {
  return (
    <Link
      className={classnames(namespace, className)}
      href={href}
      style={{
        backgroundImage: `url(${dataUri('../../images/aurora-banner@2x.png')})`,
      }}
      {...other}
    >
      <Icon className={`${namespace}__icon`} renderIcon={ArrowLeft16} />
      <span className={`${namespace}__text`}>
        {labelText} {children}
        {view && ` / ${view}`}
      </span>
    </Link>
  );
}

ReturnToBanner.propTypes = {
  /** Provide the contents of the `ReturnToBanner` */
  children: node.isRequired,

  /** Specify the URL to 'return' to */
  href: string.isRequired,

  /** Specify the translated text for the label */
  labelText: string.isRequired,

  /** Specify the text for the view to be returned to */
  view: string,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

ReturnToBanner.defaultProps = {
  view: null,
  className: null,
};

export default ReturnToBanner;
