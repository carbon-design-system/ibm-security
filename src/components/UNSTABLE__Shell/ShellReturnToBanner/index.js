/**
 * @file 'Return to' banner navigation.
 * @copyright IBM Security 2020
 */

import ArrowLeft16 from '@carbon/icons-react/lib/arrow--left/16';

import dataUri from 'data-uri.macro';
import { node, string } from 'prop-types';
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

function ShellReturnToBanner({ children, href, labelText, view, ...other }) {
  return (
    <Link
      className={`${legacyNamespace} ${appendComponentNamespace(
        shellNamespace,
        suffix
      )}`}
      href={href}
      style={{
        backgroundImage: `url(${dataUri(
          '../../../images/aurora-banner@2x.png'
        )})`,
      }}
      {...other}
    >
      <Icon className={`${legacyNamespace}__icon`} renderIcon={ArrowLeft16} />
      <span className={`${legacyNamespace}__text`}>
        {labelText} {children}
        {view && ` / ${view}`}
      </span>
    </Link>
  );
}

ShellReturnToBanner.propTypes = {
  /** Provide the contents of the `ShellReturnToBanner` */
  children: node.isRequired,

  /** Specify the URL to 'return' to */
  href: string.isRequired,

  /** Specify the text for the view to be returned to */
  view: string,

  /** Specify the translated text for the label */
  labelText: string,
};

ShellReturnToBanner.defaultProps = {
  view: null,
  labelText: 'Return to',
};

export default ShellReturnToBanner;
