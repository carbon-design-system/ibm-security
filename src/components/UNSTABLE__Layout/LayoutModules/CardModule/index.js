/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import { Row } from 'carbon-components-react';
import { node, string } from 'prop-types';
import React from 'react';

import LayoutModule, {
  createLayoutModuleFromChildren,
  getLayoutModuleProps,
} from '../LayoutModule';

const moduleName = 'Card';
const namespace = 'card';

const CardModule = ({ children, ...other }) => (
  <LayoutModule module={moduleName} type={namespace} {...other}>
    {children}
  </LayoutModule>
);

CardModule.propTypes = {
  children: node.isRequired,
};

const CardModuleRow = ({ children, className, ...other }) => (
  <Row
    {...getLayoutModuleProps({
      className,
      module: `${moduleName} row`,
      type: `${namespace}__row`,
    })}
    {...other}
  >
    {children}
  </Row>
);

CardModuleRow.propTypes = {
  children: node.isRequired,
  className: string,
};

CardModuleRow.defaultProps = {
  className: null,
};

const CardModuleAction = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    module: `${moduleName} action`,
    type: `${namespace}__action`,
    ...other,
  });

CardModuleAction.propTypes = {
  children: node.isRequired,
};

export default CardModule;

export { CardModuleAction, CardModuleRow };
