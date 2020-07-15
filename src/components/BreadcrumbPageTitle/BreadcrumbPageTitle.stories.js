/**
 * @file Breadcrumb page title stories.
 * @copyright IBM Security 2020
 */

import { breakpoints } from '@carbon/layout';

import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';

import { disableCentered, meta, patterns } from '../../../.storybook';

import { BreadcrumbPageTitle } from '../..';

const props = () => ({
  title: text('Title (title)', 'Title'),
  isTitleVisible: boolean(
    'Is title visible (isTitleVisible)',
    BreadcrumbPageTitle.defaultProps.isTitleVisible
  ),
  'aria-label': 'Breadcrumb page title',
  path: new Array(3).fill().map((item = 'Breadcrumb', id) => ({
    children: `${item} ${id}`,
    href: `#${id}`,
    id: `${id}`,
  })),
});

export const Default = () => (
  <div style={{ height: breakpoints.lg.width }}>
    <BreadcrumbPageTitle {...props()} />
  </div>
);

export default meta(patterns('BreadcrumbPageTitle'), '', disableCentered());
