/**
 * @file Profile popover.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import ProfileImage from '../../ProfileImage';
import PopoverHeader from '../PopoverHeader';

import popoverNamespace from '../Popover';

export const namespace = appendComponentNamespace(popoverNamespace, 'profile');
const headerNamespace = appendComponentNamespace(namespace, 'header');

function ProfilePopover({ children, name, surname, ...other }) {
  return (
    <>
      <PopoverHeader {...other}>
        <ProfileImage
          className={`${headerNamespace}__icon`}
          profile={{ name: { first_name: name, surname } }}
          large
        />

        <span className={`${headerNamespace}__title`}>
          {name} {surname}
        </span>
      </PopoverHeader>

      {children}
    </>
  );
}

ProfilePopover.propTypes = {
  /** Specify the user's first name */
  name: string.isRequired,

  /** Specify the user's surname */
  surname: string.isRequired,

  /** Provide the contents of the `ProfilePopover` */
  children: node.isRequired,
};

export default ProfilePopover;
