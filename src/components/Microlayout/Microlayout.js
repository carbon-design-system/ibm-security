/**
 * @file Microlayout component.
 * @copyright IBM Security 2021
 */

import classnames from 'classnames';
import { elementType, node, string } from 'prop-types';
import { createElement } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const microlayoutNamespace = getComponentNamespace('microlayout');

const getMicrolayoutProps = ({ className, namespace }) => ({
  className: classnames(
    microlayoutNamespace,
    `${microlayoutNamespace}--${namespace}`,
    className
  ),
});

const Microlayout = ({ as, className, children, namespace, ...other }) =>
  createElement(
    as,
    {
      ...getMicrolayoutProps({ className, namespace }),
      ...other,
    },
    children
  );

Microlayout.propTypes = {
  /** Provide the content for the `Microlayout` */
  children: node.isRequired,

  /** Provide the style namespace for the `Microlayout` */
  namespace: string.isRequired,

  /** Provide a custom element to be rendered instead of the default */
  as: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

Microlayout.defaultProps = {
  as: 'div',
  className: null,
};

export default Microlayout;

export { getMicrolayoutProps, microlayoutNamespace };
