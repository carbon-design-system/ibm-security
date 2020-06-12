/**
 * @file 'Skip to content' navigation.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { SkipToContent } from '../../UIShell';

import { legacyNamespace } from '../Shell';

const namespace = appendComponentNamespace(legacyNamespace, 'skip-to-content');

function ShellSkipToContent({ children, href, labelText, ...other }) {
  return (
    <div className={namespace}>
      <SkipToContent
        className={`${namespace}__link`}
        aria-label={labelText}
        href={href}
        {...other}
      >
        {children}
      </SkipToContent>
    </div>
  );
}

ShellSkipToContent.propTypes = {
  /** Provide the contents of the `ShellSkipToContent` */
  children: node.isRequired,

  /** Specify the hash identifier to 'skip' to */
  href: string.isRequired,

  /** Provide a label for accessibility */
  labelText: string.isRequired,
};

export default ShellSkipToContent;
