/**
 * @file Popover account.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as profileNamespace } from '../ProfilePopover';

export const namespace = appendComponentNamespace(profileNamespace, 'body');

function PopoverAccount({ account, children, className, id, ...other }) {
  return (
    <section
      className={classnames(namespace, `${namespace}--account`, className)}
      {...other}
    >
      <div className={`${namespace}__label`}>
        {account}: <span className="selectable-text">{id}</span>
      </div>
      <div className={`${namespace}__name`}>
        <span className={`${namespace}__name__text`}>{children}</span>
      </div>
    </section>
  );
}

PopoverAccount.propTypes = {
  /** Provide the contents of the `PopoverAccount` */
  children: node.isRequired,

  /** Specify the account to display */
  account: string.isRequired,

  /** Specify the identifier to display */
  id: string.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

PopoverAccount.defaultProps = {
  className: null,
};

export default PopoverAccount;
