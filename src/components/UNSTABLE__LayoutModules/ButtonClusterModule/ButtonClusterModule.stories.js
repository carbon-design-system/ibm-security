/**
 * @file Button cluster module stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16 } from '@carbon/icons-react';

import React from 'react';

import withResponsive from '../../../../.storybook/decorators';

import { Button, ButtonClusterModule } from '../../..';

import getTitle from '../stories';

export default {
  title: getTitle(ButtonClusterModule),
  component: ButtonClusterModule,
  decorators: [withResponsive],
};

export const Default = () => (
  <ButtonClusterModule>
    <Button kind="ghost" renderIcon={Add16}>
      Button 1
    </Button>

    <Button kind="ghost" renderIcon={Edit16}>
      Button 2
    </Button>
  </ButtonClusterModule>
);
