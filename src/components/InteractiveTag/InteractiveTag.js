/**
 * @file Interactive tag.
 * @copyright IBM Security 2019 - 2020
 */

import Close16 from '@carbon/icons-react/lib/close/16';

import classnames from 'classnames';
import { bool, func, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace/index';

import Icon from '../Icon';
import Tag from '../Tag';

export const namespace = getComponentNamespace('tag--interactive');

/**
 * Interactive tag component.
 */
const InteractiveTag = ({
  children,
  className,
  isSelected,
  onRemove,
  removable,
  removeBtnLabel,
  ...other
}) => (
  <Tag
    className={classnames(namespace, className, {
      [`${namespace}--default`]: !isSelected,
      [`${namespace}--removable`]: removable,
      [`${namespace}--selected`]: isSelected,
    })}
    filter={false}
    {...other}
  >
    {children}
    {removable && (
      <button
        aria-label={removeBtnLabel}
        className={`${namespace}__button`}
        onClick={onRemove}
      >
        <Icon className={`${namespace}__button__icon`} renderIcon={Close16} />
      </button>
    )}
  </Tag>
);

InteractiveTag.defaultProps = {
  isSelected: false,
  onRemove: null,
  removable: false,
  removeBtnLabel: 'Remove',
  type: 'gray',
};

const { propTypes } = Tag;

InteractiveTag.propTypes = {
  ...propTypes,
  type: propTypes.type,

  /** @type {boolean} Determines if the tag is selected. */
  isSelected: bool,

  /** @type {function} Callback function to remove the tag. */
  onRemove: func,

  /** @type {boolean} Set whether the tag is removable or not. */
  removable: bool,

  /** @type {string} Label for the button used to remove the tag. */
  removeBtnLabel: string,
};

export default InteractiveTag;
