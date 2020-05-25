/**
 * @file Layout background.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';

import { cloneChildren } from '../LayoutModule';

const LayoutBackground = ({ children, ...other }) =>
  cloneChildren(children, 'background', other);

LayoutBackground.propTypes = {
  children: node.isRequired,
};

export default LayoutBackground;
