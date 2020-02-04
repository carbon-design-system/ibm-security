/**
 * @file 'Skip' navigation.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import Button from '../../Button';

import { legacyNamespace } from '../Shell';

const namespace = appendComponentNamespace(legacyNamespace, 'skip-to-content');

function ShellSkipToContent({ children, href, ...other }) {
  return (
    <div className={namespace}>
      <Button
        className={`${namespace}__link`}
        href={href}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
        {...other}
      >
        {children}
      </Button>
    </div>
  );
}

ShellSkipToContent.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
};

export default ShellSkipToContent;
