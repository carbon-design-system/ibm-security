/**
 * @file Combo button item.
 * @copyright IBM Security 2019
 */

import React from 'react';
import Button from '../../Button';
import OverflowMenuItem from '../../OverflowMenuItem';
import { namespace } from '../ComboButton';

const ComboButtonItem = props => {
  const { ...rest } = props;
  return <span {...rest} className={`${namespace}-item`} />;
};

ComboButtonItem.defaultProps = {
  ...Button.defaultProps,
  ...OverflowMenuItem.defaultProps,
};

ComboButtonItem.propTypes = {
  ...Button.propTypes,
  ...OverflowMenuItem.propTypes,
};

export default ComboButtonItem;
