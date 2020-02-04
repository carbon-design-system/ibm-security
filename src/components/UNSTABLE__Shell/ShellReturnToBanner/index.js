/**
 * @file 'Return' navigation.
 * @copyright IBM Security 2020
 */

import ArrowLeft16 from '@carbon/icons-react/lib/arrow--left/16';

import dataUri from 'data-uri.macro';
import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import Icon from '../../Icon';
import Link from '../../Link';

import {
  legacyNamespace as legacyShellNamespace,
  namespace as shellNamespace,
} from '../Shell';

const suffix = 'banner';
const legacyNamespace = appendComponentNamespace(legacyShellNamespace, suffix);
const namespace = appendComponentNamespace(shellNamespace, suffix);

function ShellReturnToBanner({ children, ...other }) {
  return (
    <Link
      className={`${legacyNamespace} ${namespace}`}
      style={{
        backgroundImage: `url(${dataUri(
          '../../../images/aurora-banner@2x.png'
        )})`,
      }}
      {...other}
    >
      <Icon className={`${legacyNamespace}__icon`} renderIcon={ArrowLeft16} />
      <span className={`${legacyNamespace}__text`}>{children}</span>
    </Link>
  );
}

ShellReturnToBanner.propTypes = {
  children: node.isRequired,
};

export default ShellReturnToBanner;
