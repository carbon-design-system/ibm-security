/**
 * @file Icon stories.
 * @copyright IBM Security 2019
 */

import Add20 from '@carbon/icons-react/lib/add/20';
import Add24 from '@carbon/icons-react/lib/add/24';
import Add32 from '@carbon/icons-react/lib/add/32';

import { miniUnits } from '@carbon/layout';

import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import theme from '../../globals/theme';

import { className } from '../_mocks_';
import { renderIcon } from '../Icon/_mocks_';

import { Icon } from '../..';

const iconProps = {
  className,
  style: { fill: theme.icon01, margin: miniUnits(1) },
};

storiesOf(components('Icon'), module).add(
  'default',
  () =>
    [renderIcon, Add20, Add24, Add32].map((size, index) => {
      const key = `icon__${index}`;

      return <Icon key={key} renderIcon={size} {...iconProps} />;
    }),

  {
    info: {
      text: `
          Basic implementation of an Icon component.
        `,
    },
  }
);
