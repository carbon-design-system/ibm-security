/**
 * @file Icon stories.
 * @copyright IBM Security 2019 - 2020
 */

import { Add20, Add24, Add32 } from '@carbon/icons-react';
import { miniUnits } from '@carbon/layout';

import { storiesOf } from '@storybook/react';
import React from 'react';

import { components } from '../../../.storybook';
import theme from '../../globals/theme';

import { Icon } from '../..';

import { renderIcon } from './_mocks_';

const iconProps = {
  style: { fill: theme.icon01, margin: miniUnits(1) },
};

storiesOf(components('Icon'), module).add(
  'Default',
  () => (
    <>
      {[renderIcon, Add20, Add24, Add32].map((size, index) => {
        const key = `icon__${index}`;

        return <Icon key={key} renderIcon={size} {...iconProps} />;
      })}
    </>
  ),

  {
    info: {
      text: `
          Basic implementation of an Icon component.
        `,
    },
  }
);
