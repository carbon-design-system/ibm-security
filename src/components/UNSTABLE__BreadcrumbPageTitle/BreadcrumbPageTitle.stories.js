/**
 * @file Breadcrumb page title stories.
 * @copyright IBM Security 2020
 */

import { breakpoints, layout05 } from '@carbon/layout';

import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';

import { disableCentered, meta, patterns } from '../../../.storybook';

import { UNSTABLE__BreadcrumbPageTitle } from '../..';

const props = () => ({
  title: text('Title (title)', 'Title'),
  'aria-label': 'Breadcrumb page title',
  path: boolean('Path (path)', true)
    ? new Array(3).fill().map((item = 'Breadcrumb', id) => ({
        children: `${item} ${id}`,
        href: `#${id}`,
        id: `${id}`,
      }))
    : null,
});

export const Default = () => (
  <div style={{ height: breakpoints.lg.width, margin: layout05 }}>
    <UNSTABLE__BreadcrumbPageTitle {...props()} />
  </div>
);

export default meta(
  patterns('UNSTABLE BreadcrumbPageTitle'),
  "The breadcrumb page title indicates the user's position on a website or platform, depicting hierarchy, facilitating quick transitions, and displaying the navigation of user path.",
  disableCentered()
);
