/**
 * @file Get started.
 * @copyright IBM Security 2020
 */

import { breakpoints } from '@carbon/layout';
import marked from 'marked';

import React from 'react';

import readme from '../../README.md';

import { HIERARCHY_ROOT_SEPARATOR, meta } from '../../.storybook';

const { margin, width } = breakpoints.lg;

export const README = () => (
  <div
    style={{ margin, width }}
    dangerouslySetInnerHTML={{ __html: marked(readme) }}
  />
);

export default meta(`About${HIERARCHY_ROOT_SEPARATOR}Get Started`);
