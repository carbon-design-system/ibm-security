/**
 * @file Canvas.
 * @copyright IBM Security 2020
 */

import { Canvas } from '@storybook/addon-docs/blocks';
import React from 'react';

import theme from '../../../src/globals/theme';

export default props => (
  <Canvas
    style={{ backgroundColor: theme.uiBackground }}
    withSource="open"
    {...props}
  />
);
