/**
 * @file Description module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import withResponsive from '../../../../.storybook/decorators';
import { DescriptionModule, TitleBarModule } from '../../..';
import getTitle, { getDocsParameters } from '../stories';

import page from './index.mdx';

export default {
  title: getTitle(DescriptionModule),
  component: DescriptionModule,
  parameters: {
    ...getDocsParameters(page),
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <DescriptionModule>
    {({ getLayoutProps }) => (
      <>
        <TitleBarModule title="Section title" />

        <p {...getLayoutProps()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          finibus tortor eget est ornare, a ultrices risus tincidunt.
          Suspendisse condimentum mauris at ornare tempor. Phasellus a arcu
          ante. Morbi vitae ultrices quam, eget eleifend magna. Morbi quis
          porttitor ex, in elementum tellus. In eget rutrum eros, eu scelerisque
          risus. Phasellus vel pretium lorem, ut laoreet sapien. Cras ac purus
          vitae velit efficitur iaculis. Nunc.
        </p>

        <p {...getLayoutProps()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          finibus tortor eget est ornare, a ultrices risus tincidunt.
          Suspendisse condimentum mauris at ornare tempor. Phasellus a arcu
          ante. Morbi vitae ultrices quam, eget eleifend magna. Morbi quis
          porttitor ex, in elementum tellus. In eget rutrum eros, eu scelerisque
          risus. Phasellus vel pretium lorem, ut laoreet sapien. Cras ac purus
          vitae velit efficitur iaculis. Nunc.
        </p>
      </>
    )}
  </DescriptionModule>
);

export const subsectionTitle = () => (
  <DescriptionModule>
    {({ getLayoutProps }) => (
      <>
        <TitleBarModule title="Section title" />
        <TitleBarModule title="Subsection title" subsection />

        <p {...getLayoutProps()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          finibus tortor eget est ornare, a ultrices risus tincidunt.
          Suspendisse condimentum mauris at ornare tempor. Phasellus a arcu
          ante. Morbi vitae ultrices quam, eget eleifend magna. Morbi quis
          porttitor ex, in elementum tellus. In eget rutrum eros, eu scelerisque
          risus. Phasellus vel pretium lorem, ut laoreet sapien. Cras ac purus
          vitae velit efficitur iaculis. Nunc.
        </p>

        <p {...getLayoutProps()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          finibus tortor eget est ornare, a ultrices risus tincidunt.
          Suspendisse condimentum mauris at ornare tempor. Phasellus a arcu
          ante. Morbi vitae ultrices quam, eget eleifend magna. Morbi quis
          porttitor ex, in elementum tellus. In eget rutrum eros, eu scelerisque
          risus. Phasellus vel pretium lorem, ut laoreet sapien. Cras ac purus
          vitae velit efficitur iaculis. Nunc.
        </p>
      </>
    )}
  </DescriptionModule>
);
