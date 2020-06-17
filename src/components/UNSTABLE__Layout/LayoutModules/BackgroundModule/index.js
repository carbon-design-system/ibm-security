/**
 * @file Background module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';

import { createLayoutModuleFromChildren } from '../LayoutModule';

const BackgroundModule = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    module: 'Background',
    type: 'background',
    ...other,
  });

BackgroundModule.propTypes = {
  children: node.isRequired,
};

export default BackgroundModule;
