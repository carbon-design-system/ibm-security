/**
 * @file Popover account list.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import { Accordion, AccordionItem } from '../../Accordion';

import PopoverAccount, { namespace } from '../PopoverAccount';

import { namespace as headerNamespace } from '../ShellHeader';

function PopoverAccountList({ account, children, id, name, ...other }) {
  return (
    <Accordion className={`${namespace}__accordion`} {...other}>
      <AccordionItem
        className={`${namespace}__accordion__item`}
        title={
          <PopoverAccount
            id={id}
            className={`${headerNamespace}__account`}
            account={account}
          >
            {name}
          </PopoverAccount>
        }
      >
        <ul className={`${namespace}__list`}>{children}</ul>
      </AccordionItem>
    </Accordion>
  );
}

PopoverAccountList.propTypes = {
  /** Provide the contents of the `PopoverAccountList` */
  children: node.isRequired,

  /** Specify the identifier to display */
  id: string.isRequired,

  /** Specify the account to display */
  account: string.isRequired,

  /** Specify the account name to display */
  name: string.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

PopoverAccountList.defaultProps = {
  className: null,
};

export default PopoverAccountList;
