/**
 * @file Background module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node } from 'prop-types';
import { Children, cloneElement } from 'react';

import { namespace } from '../LayoutModule';

const BackgroundModule = ({ children, ...other }) =>
  Children.map(children, child =>
    cloneElement(child, {
      ...other,
      className: classnames(
        `${namespace}--background`,
        child.props.className,
        other.className
      ),
    })
  );

BackgroundModule.propTypes = {
  children: node.isRequired,
};

export default BackgroundModule;
