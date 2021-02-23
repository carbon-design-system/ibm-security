/**
 * @file List item module.
 * @copyright IBM Security 2021
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'list-item';

/**
 * TODO: Description.
 */
const ListItemModule = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children({
      Column: props => (
        <LayoutModule namespace={`${namespace}__column`} {...props} />
      ),

      getLayoutProps: ({ className, type, ...rest } = {}) => ({
        className: classnames(className, {
          [`${layoutModuleNamespace}--${namespace}__${type}`]: type,
        }),
        ...rest,
      }),
    })}
  </LayoutModule>
);

ListItemModule.propTypes = {
  /** Provide the content for the `ListItemModule` */
  children: func.isRequired,
};

export default ListItemModule;
