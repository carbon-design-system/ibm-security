/**
 * @file Type layout entry point.
 * @copyright IBM Security 2019 - 2020
 */

import React from 'react';

import { deprecate } from '../../globals/deprecate';
import { DescriptionList } from '../DescriptionList';

// TODO: `2.x` - Remove.
export const TypeLayout = props => {
  deprecate('TypeLayout', 'DescriptionList');

  return <DescriptionList {...props} />;
};

const { defaultProps, propTypes } = DescriptionList;

TypeLayout.defaultProps = defaultProps;
TypeLayout.propTypes = propTypes;

export {
  DescriptionListBody as TypeLayoutBody,
  DescriptionListCell as TypeLayoutCell,
  DescriptionListRow as TypeLayoutRow,
} from '../DescriptionList';
