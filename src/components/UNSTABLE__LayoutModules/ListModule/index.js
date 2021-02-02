/**
 * @file List module.
 * @copyright IBM Security 2021
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'list';

/**
 * TODO: Description.
 */
const ListModule = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children({
      getLayoutProps: ({ className, ...rest } = {}) => ({
        className: classnames(
          `${layoutModuleNamespace}--${namespace}__column`,
          className
        ),
        ...rest,
      }),
    })}
  </LayoutModule>
);

ListModule.propTypes = {
  /** Provide the content for the `ListModule` */
  children: func.isRequired,
};

export default ListModule;
