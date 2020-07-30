/**
 * @file Page title stories.
 * @copyright IBM Security 2020
 */

import { breakpoints, layout05 } from '@carbon/layout';

import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';

import { disableCentered, meta, patterns } from '../../../.storybook';

import { BreadcrumbItem, UNSTABLE__PageTitle } from '../..';

const props = () => ({
  title: text('Title (title)', 'Title'),
  children: boolean('Children (children)', true)
    ? new Array(3).fill().map((item = 'BreadcrumbItem', id) => {
        const key = `breadcrumb-item__${id}`;

        return (
          <BreadcrumbItem key={key} href={`#${id}`}>
            {`${item} ${id}`}
          </BreadcrumbItem>
        );
      })
    : null,
});

export const Default = () => (
  <div style={{ height: breakpoints.lg.width, margin: layout05 }}>
    <UNSTABLE__PageTitle {...props()} />
  </div>
);

export default meta(
  patterns('UNSTABLE PageTitle'),
  "The page title indicates the user's position on a website or platform, depicting hierarchy, facilitating quick transitions, and displaying the navigation of user path.",
  disableCentered()
);
