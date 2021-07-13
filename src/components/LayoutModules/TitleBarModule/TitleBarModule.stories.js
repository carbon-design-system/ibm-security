/**
 * @file Title bar module stories.
 * @copyright IBM Security 2020 - 2021
 */

import { Add16, Edit16, Filter16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { IconButtonBar, TitleBarModule } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(TitleBarModule.name),
  component: TitleBarModule,
  args: {
    title: 'Section title',
  },
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
  decorators: [withResponsive],
};

export const Default = args => <TitleBarModule {...args} />;

export const Label = args => <TitleBarModule label="Label" {...args} />;

export const Variant = args => (
  <TitleBarModule title="Sub-section title" subsection {...args}>
    <IconButtonBar
      actions={[
        {
          label: 'Action 1',
          renderIcon: Add16,
        },
        {
          label: 'Action 2',
          renderIcon: Edit16,
        },
        {
          label: 'Action 3',
          renderIcon: Filter16,
        },
      ]}
      size="lg"
    />
  </TitleBarModule>
);

export const VariantLabel = args => (
  <TitleBarModule title="Sub-section title" subsection label="Label" {...args}>
    <IconButtonBar
      actions={[
        {
          label: 'Action 1',
          renderIcon: Add16,
        },
        {
          label: 'Action 2',
          renderIcon: Edit16,
        },
        {
          label: 'Action 3',
          renderIcon: Filter16,
        },
      ]}
      size="lg"
    />
  </TitleBarModule>
);

/** Hides the control for labelDirection - we only want a static top */
VariantLabel.argTypes = {
  labelDirection: { table: { disable: true } },
};

Variant.parameters = {
  viewMode: 'canvas',
};

VariantLabel.parameters = {
  viewMode: 'canvas',
};

Label.parameters = {
  viewMode: 'canvas',
};
