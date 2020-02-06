/**
 * @file Header 'name'.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import Link from '../../Link';

import { headerNamespace } from '../ShellHeader';

const namespace = appendComponentNamespace(headerNamespace, 'link');

function ShellHeaderName({ brand, children, prefix, ...other }) {
  return (
    <Link className={namespace} {...other}>
      {`${prefix} `}
      <span className={`${namespace}__title--brand`}>{`${brand} `}</span>
      <span className={`${namespace}__title--product`}>{children}</span>
    </Link>
  );
}

ShellHeaderName.propTypes = {
  /** Specify the prefix for the name */
  prefix: string.isRequired,

  /** Specify the brand for the name */
  brand: string.isRequired,

  /** Provide the contents of the `ShellHeaderName` */
  children: node.isRequired,
};

export default ShellHeaderName;
