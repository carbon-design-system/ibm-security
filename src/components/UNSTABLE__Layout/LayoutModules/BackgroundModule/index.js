/**
 * @file Background module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';

import { cloneChildren } from '../LayoutModule';

const BackgroundModule = ({ children, ...other }) =>
  cloneChildren(children, 'background', other);

BackgroundModule.propTypes = {
  children: node.isRequired,
};

export default BackgroundModule;
