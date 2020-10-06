/**
 * @file Title bar module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, elementType, node, string } from 'prop-types';
import React, { createElement } from 'react';

import LayoutModule, {
  getLayoutModuleProps,
  layoutModuleNamespace,
} from '../LayoutModule';

const namespace = 'title-bar';

/**
 * Title bar modules provide interchangeable and reliable headings for establishing consistent hierarchies.
 */
const TitleBar = ({
  children,
  className,
  element,
  subsection,
  title,
  ...other
}) => (
  <LayoutModule namespace={namespace} {...other}>
    {createElement(
      element,
      {
        ...getLayoutModuleProps({
          className: classnames({
            [`${layoutModuleNamespace}--${namespace}__title--subsection`]: subsection,
          }),
          namespace: `${namespace}__title`,
        }),
      },
      title
    )}

    {children && (
      <LayoutModule namespace={`${namespace}__items`}>{children}</LayoutModule>
    )}
  </LayoutModule>
);

TitleBar.propTypes = {
  /** Provide the title of the `TitleBar` */
  title: node.isRequired,

  /** Provide the items for the `TitleBar` */
  children: node,

  /** Specify whether a subsection should be used */
  subsection: bool,

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

TitleBar.defaultProps = {
  children: null,
  subsection: false,
  element: 'h2',
  className: null,
};

export default TitleBar;
