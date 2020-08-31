/**
 * @file Title.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, node, string } from 'prop-types';
import { createElement } from 'react';

import { getLayoutModuleProps, layoutModuleNamespace } from '../LayoutModule';

const namespace = 'title';

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
  children: node.isRequired,
  subsection: bool,
  element: string,
  className: string,
};

Title.defaultProps = {
  subsection: false,
  element: 'h2',
  className: null,
};

export default Title;
