/**
 * @file Title.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, elementType, node, string } from 'prop-types';
import { createElement } from 'react';

import { getLayoutModuleProps, layoutModuleNamespace } from '../LayoutModule';

const namespace = 'title';

/**
 * Titles provide interchangeable and reliable headings for establishing consistent hierarchies when using layout modules.
 */
const Title = ({ children, className, element, subsection, ...other }) =>
  createElement(element, {
    children,
    ...getLayoutModuleProps({
      className: classnames(className, {
        [`${layoutModuleNamespace}--${namespace}--subsection`]: subsection,
      }),
      type: namespace,
    }),
    ...other,
  });

Title.propTypes = {
  /** Provide the contents of the `Title` */
  children: node.isRequired,

  /** Specify whether a subsection should be used */
  subsection: bool,

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

Title.defaultProps = {
  subsection: false,
  element: 'h2',
  className: null,
};

export default Title;
