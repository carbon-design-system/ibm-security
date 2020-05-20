/**
 * @file Layout modules.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React, { Children, cloneElement } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('unstable--layout-modules');

const { map } = Children;

const cloneChildren = (children, className, other) =>
  map(children, child =>
    cloneElement(child, {
      className: classnames(
        child.props.className,
        `${namespace}--${className}`
      ),
      ...other,
    })
  );

const LayoutModule = ({ className, children, module, type, ...other }) => (
  <div
    className={classnames(namespace, `${namespace}--${type}`, className)}
    data-module={module && `${module} module`}
    {...other}
  >
    {children}
  </div>
);

LayoutModule.propTypes = {
  children: node.isRequired,
  type: string.isRequired,
  module: string,
  className: string,
};

LayoutModule.defaultProps = {
  module: null,
  className: null,
};

const ActionBarModule = ({ children, ...other }) => (
  <LayoutModule module="Action bar" type="action-bar" {...other}>
    {children}
  </LayoutModule>
);

ActionBarModule.propTypes = {
  children: node.isRequired,
};

const ActionBarActions = ({ children, ...other }) => (
  <LayoutModule type="action-bar__actions" {...other}>
    {children}
  </LayoutModule>
);

ActionBarActions.propTypes = {
  children: node.isRequired,
};

const ButtonClusterModule = ({ children, ...other }) => (
  <LayoutModule module="Button cluster" type="button-cluster" {...other}>
    {map(children, child => (
      <LayoutModule type="button-cluster__button">{child}</LayoutModule>
    ))}
  </LayoutModule>
);

ButtonClusterModule.propTypes = {
  children: node.isRequired,
};

const DescriptionModule = ({ children, ...other }) => (
  <LayoutModule module="Description" type="description" {...other}>
    {children}
  </LayoutModule>
);

DescriptionModule.propTypes = {
  children: node.isRequired,
};

const ICAModule = ({ children, ...other }) => (
  <LayoutModule module="ICA" type="ica" {...other}>
    {children}
  </LayoutModule>
);

ICAModule.propTypes = {
  children: node.isRequired,
};

const LayoutBackground = ({ children, ...other }) =>
  cloneChildren(children, 'background', other);

LayoutBackground.propTypes = {
  children: node.isRequired,
};

const LayoutTitle = ({ children, ...other }) =>
  cloneChildren(children, 'title', other);

LayoutTitle.propTypes = {
  children: node.isRequired,
};

const PageTabDetails = ({ children, ...other }) => (
  <LayoutModule type="page-tab__details" {...other}>
    {children}
  </LayoutModule>
);

PageTabDetails.propTypes = {
  children: node.isRequired,
};

const PageTabModule = ({ children, ...other }) => (
  <LayoutModule module="Page tab" type="page-tab" {...other}>
    {children}
  </LayoutModule>
);

PageTabModule.propTypes = {
  children: node.isRequired,
};

const TitleBarModule = ({ children, ...other }) => (
  <LayoutModule module="Title bar" type="title-bar" {...other}>
    {children}
  </LayoutModule>
);

TitleBarModule.propTypes = {
  children: node.isRequired,
};

const TitleBarActions = ({ children, ...other }) => (
  <LayoutModule type="title-bar__actions" {...other}>
    {children}
  </LayoutModule>
);

TitleBarActions.propTypes = {
  children: node.isRequired,
};

const TypeLayoutModule = ({ children, ...other }) => (
  <LayoutModule module="TypeLayout" type="type-layout" {...other}>
    {children}
  </LayoutModule>
);

TypeLayoutModule.propTypes = {
  children: node.isRequired,
};

export default LayoutBackground;

export {
  ActionBarModule,
  ActionBarActions,
  ButtonClusterModule,
  DescriptionModule,
  ICAModule,
  LayoutTitle,
  namespace,
  PageTabDetails,
  PageTabModule,
  TitleBarModule,
  TitleBarActions,
  TypeLayoutModule,
};
