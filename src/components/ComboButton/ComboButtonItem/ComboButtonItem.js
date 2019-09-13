/**
 * @file Combo button item.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { namespace } from '../ComboButton';

const ComboButtonItem = props => {
  const { ...rest } = props;
  return <span {...rest} className={`${namespace}-item`} />;
};

export default ComboButtonItem;
