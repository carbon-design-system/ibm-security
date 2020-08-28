/**
 * @file Button cluster stories.
 * @copyright IBM Security 2020
 */
import { Activity16, Copy16 } from '@carbon/icons-react';
import { breakpoints } from '@carbon/layout';

import React from 'react';

import { patterns } from '../../../../../.storybook';

import { Button, ButtonClusterModule } from '../../../..';

import page from './ButtonClusterModule.mdx';

export const Default = () => (
  <ButtonClusterModule>
    <Button kind="ghost" renderIcon={Copy16}>
      Duplicate campaign
    </Button>
    <Button kind="ghost" renderIcon={Activity16}>
      View activity report
    </Button>
  </ButtonClusterModule>
);

export default {
  title: patterns('ButtonClusterModule'),
  component: ButtonClusterModule,
  parameters: { docs: { page } },
  decorators: [
    story => <div style={{ width: breakpoints.md.width }}>{story()}</div>,
  ],
};
