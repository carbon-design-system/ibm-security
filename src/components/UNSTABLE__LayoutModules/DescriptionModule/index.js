/**
 * @file Description module.
 * @copyright IBM Security 2020 - 2021
 */

import classnames from 'classnames';
import { bool, func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'description';

/**
 * Description modules provide a means to orderly layout short-form content.
 */
const DescriptionModule = ({ children, short, ...other }) => (
  <LayoutModule
    className={classnames({
      [`${layoutModuleNamespace}--${namespace}--short`]: short,
    })}
    namespace={namespace}
    {...other}
  >
    {children({
      getLayoutProps: ({ className, ...rest } = {}) => ({
        className: classnames(
          `${layoutModuleNamespace}--${namespace}__content`,
          className
        ),
        ...rest,
      }),
    })}
  </LayoutModule>
);

DescriptionModule.propTypes = {
  /** Provide the content for the `DescriptionModule` */
  children: func.isRequired,

  /** Specify whether to use the short variant */
  short: bool,
};

DescriptionModule.defaultProps = {
  short: false,
};

export default DescriptionModule;
