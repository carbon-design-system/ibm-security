/**
 * @file Button cluster stories.
 * @copyright IBM Security 2020
 */
import { Activity16, Copy16 } from '@carbon/icons-react';

import React from 'react';

import { patterns } from '../../../../../.storybook';

import { Button, ButtonCluster } from '../../../..';

import page from './ButtonCluster.mdx';

export const Default = () => (
  <ButtonCluster>
    <Button kind="ghost" renderIcon={Copy16}>
      Duplicate campaign
    </Button>
    <Button kind="ghost" renderIcon={Activity16}>
      View activity report
    </Button>
  </ButtonCluster>
);

export default {
  title: patterns(`Layout Modules/${ButtonCluster.name}`),
  component: ButtonCluster,
  parameters: { docs: { page } },
};
